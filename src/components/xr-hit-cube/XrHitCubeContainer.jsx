import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import XrHitCube from "./XrHitCube";
import { ARButton, XR } from "@react-three/xr";
function XrHitCubeContainer() {
  return (
    <>
      <ARButton sessionInit={
        {
          requiredFeatures:["hit-test"]
        }
      } />
      <Canvas>
        <XR>
          <XrHitCube />
        </XR>
      </Canvas>
    </>
  );
}

export default XrHitCubeContainer;
