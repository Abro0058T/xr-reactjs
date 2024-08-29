import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import XrHitModel from "./XrHitModel";
import { ARButton, XR } from "@react-three/xr";
function XrHitModelContainer() {
  return (
    <>
      <ARButton sessionInit={
        {
          requiredFeatures:["hit-test"]
        }
      } />
      <Canvas>
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>
    </>
  );
}

export default XrHitModelContainer;
