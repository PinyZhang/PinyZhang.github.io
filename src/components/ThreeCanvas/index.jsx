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
    size: props.options.size,
    height: props.options.height,
    curveSegments: props.options.curveSegments,
    bevelEnabled: props.options.bevelEnabled,
    bevelThickness: props.options.bevelThickness,
    bevelSize: props.options.bevelSize,
    bevelSegments: props.options.bevelSegments,
  };

  return (
    <mesh
      {...props}
      ref={meshRef}
    >
      <textGeometry args={[props.username, textoptions]} />
      <meshBasicMaterial args={[{
        color: props.options.color
      }]}/>
    </mesh>
  );
}