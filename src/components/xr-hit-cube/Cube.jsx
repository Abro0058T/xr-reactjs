import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

function Cube({position}) {

    const cubeRef = useRef()

    useFrame((state,delta)=>{
        cubeRef.current.rotation.y +=delta
        });
  return (
    <>
    <OrbitControls/>
    <ambientLight/>
    <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.5,0.5,0.5]}/>
        <meshStandardMaterial color={"mediumpurple"}/>
    </mesh>
    </>
  )
}

export default Cube