import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
function Model() {
  const gltf = useLoader(GLTFLoader,"/models/druid.gltf")
  return (
   <Suspense fallback = {null}>
    <primitive object={gltf.scene}/>
   </Suspense>
  )
}

export default Model