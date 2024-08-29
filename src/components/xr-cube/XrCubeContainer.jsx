import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import XrCube from "./XrCube";
import { ARButton, XR } from "@react-three/xr";
function XrCubeContainer() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <XrCube />
        </XR>
      </Canvas>
    </>
  );
}

export default XrCubeContainer;
