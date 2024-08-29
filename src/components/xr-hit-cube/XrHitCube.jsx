import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import React, { useRef, useState } from "react";
import Cube from "./Cube";
import { useThree } from "@react-three/fiber";

function XrHitCube() {
  const reticleRef = useRef();
  const [cubes,setCubes] = useState([])
  
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
      {cubes.map(({position,id})=>{
        return <Cube key={id} position={position}/>
      })}
      <Interactive onSelect={placeCube}>
      <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.1, 0.25, 32]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      </Interactive>
    </>
  );
}

export default XrHitCube;
