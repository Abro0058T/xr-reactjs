import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import Cube from './Cube'
import "./Canvas.css"
function CubeContainer() {

  return (
    <Canvas className='canvas'>
        <Cube/>
    </Canvas>
  )
}

export default CubeContainer