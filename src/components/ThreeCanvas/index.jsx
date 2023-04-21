import React, { useRef } from 'react';
import { MeshBasicMaterial } from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend } from '@react-three/fiber';

import HelvetikerRegular from 'three/examples/fonts/helvetiker_regular.typeface.json';

extend({ TextGeometry, MeshBasicMaterial });

export default function ThreeCanvas(props) {
  const meshRef = useRef();

  // 解析字体包
  const font = new FontLoader().parse(HelvetikerRegular);

  const textoptions = {
    font: font,
    size: 3,  
    height: 1.0,
    curveSegments: 1,
    bevelEnabled: false, 
    bevelThickness: 0.10,
    bevelSize: 0.10, 
    bevelSegments: 0,
  };

  return (
    <mesh
      {...props}
      ref={meshRef}
    >
      <textGeometry args={[props.username, textoptions]} />
      <meshBasicMaterial args={[{
        color: props.color
      }]}/>
    </mesh>
  );
}