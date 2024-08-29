import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

function Cube() {

    const cubeRef = useRef()

    useFrame((state,delta)=>{
        cubeRef.current.rotation.y +=0.005
        });
  return (
    <>
    <OrbitControls/>
    <ambientLight/>
    <mesh ref={cubeRef}>
        <boxGeometry/>
        <meshStandardMaterial color={"mediumpurple"}/>
    </mesh>
    </>
  )
}

export default Cube