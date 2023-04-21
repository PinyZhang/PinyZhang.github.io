import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import ThreeCanvas from './components/ThreeCanvas';
import ConfigPanel from './components/ConfigPanel';
import { OrbitControls } from '@react-three/drei'
import HistoryStack from './utils/history-manager';
import './App.css';

const historyStack = new HistoryStack();

historyStack.pushState({
  backgroundColor: '#000000',
  color: 'red',
  x: 0,
  y: 0,
  z: 0,
  size: 3,  
  height: 1.0,
  curveSegments: 1,
  bevelEnabled: false, 
  bevelThickness: 0.10,
  bevelSize: 0.10, 
  bevelSegments: 0,
});

function App(props) {
  const [options, setOptions] = useState(historyStack.current);

  const onKeyDown = (event) => {
    event.stopPropagation();

    if ((event.ctrlKey || event.metaKey) && event.keyCode === 90) {
      // 前进
      if (event.shiftKey) {
        historyStack.forwardState();
        setOptions(historyStack.current);

      // 后退
      } else {
        historyStack.popState();
        setOptions(historyStack.current);
      }
    }  
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, []);

  return (
    <div className='App'>
      <ConfigPanel options={options} setOptions={(options) => {
        setOptions(options);
        historyStack.pushState(options);
      }}/>

      <Canvas>
        <color attach="background" args={[options.backgroundColor]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <ConfigPanel /> */}
        <ThreeCanvas username={props.username} position={[options.x, options.y, options.z]} options={options} />
        <OrbitControls mouseButtons={{
          LEFT: THREE.MOUSE.PAN
        }}/>
      </Canvas>
    </div>
  );
}

export default App;
