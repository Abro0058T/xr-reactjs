import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import React, { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import Model from "./Model";

function XrHitModel({model}) {
  const reticleRef = useRef();
  const [cubes,setCubes] = useState([])
  const {isPresenting} = useXR()
  useThree(({camera})=>{
    if(!isPresenting) {
      camera.position.z=3;
    }
  })

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.rotation.set(-Math.PI/2,0,0);
  });
  const placeCube = (e) => {
    let position = e.intersection.object.position.clone()
    let id = Date.now();
    setCubes([{position,id}])

  }
  return (

    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting && cubes.map(({position,id})=>{
        return <Model key={id} position={position} model={model}/>
      })}
    {isPresenting &&  <Interactive onSelect={placeCube}>
      <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.1, 0.25, 32]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      </Interactive>}
      {
        !isPresenting && <Model scale={[6,6,6]}  rotation-x={(-Math.PI/4)-5} rotation-y={(-Math.PI/3)} model={model}/> 
      }
    </>
  );
}

export default XrHitModel;
