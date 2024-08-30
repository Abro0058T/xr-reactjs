import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

function Cube(props) {

  const { nodes, materials } = useGLTF('/model/koreanwinggltf.gltf')
    const cubeRef = useRef()

    useFrame((state,delta)=>{
        cubeRef.current.rotation.y +=0.005
        });
  return (
    <>
    <OrbitControls/>
    <ambientLight/>
    {/* <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color={"mediumpurple"}/>
    </mesh> */}
     {/* <group {...props} dispose={null}> */}
      <mesh ref={cubeRef}
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0007.geometry}
        material={materials['Material_0.008']}
      ></mesh>
    {/* </group> */}
    </>
  )
}
// useGLTF.preload('/model/koreanwinggltf.gltf')

export default Cube