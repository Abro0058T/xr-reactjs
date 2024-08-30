import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

// import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
function Cube(props) {
  
  const { nodes, materials } = useGLTF('/model/koreanwinggltf.gltf')
    // const cubeRef = useRef()

    // useFrame((state,delta)=>{
    //     cubeRef.current.rotation.y +=0.005
    //     });
  return (
    <>
    <OrbitControls/>
    <ambientLight/>
    {/* <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color={"mediumpurple"}/>
    </mesh> */}
  <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0007.geometry}
        material={materials['Material_0.008']}
      />
    </group>
    </>
  )
}

useGLTF.preload('/model/koreanwinggltf.gltf')
export default Cube