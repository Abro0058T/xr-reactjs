import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react' 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
function Model(props) {

  const { nodes, materials } = useGLTF('/model/ramenemb.gltf')
 
  

  return (
    <>
    <OrbitControls/>
    <ambientLight/>
 
     <group {...props} dispose={null}>
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes[Object.keys(nodes)[1]].geometry}
        material={materials[Object.keys(materials)[0]]}
      ></mesh>
    </group>
    </>
  )
}
// useGLTF.preload('/model/koreanwinggltf.gltf')

export default Model