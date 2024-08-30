import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import XrHitModel from "./XrHitModel";
import { ARButton, XR } from "@react-three/xr";
import Interface from "./Interface";
function XrHitModelContainer() {
  const [modelName, setModelName] = useState("koreanwinggltf")
  return (
    <>
      <ARButton sessionInit={
        {
          requiredFeatures:["hit-test"]
        }
      } />
      <Canvas>
        <XR>
          <XrHitModel  model={modelName}/>
        </XR>
      </Canvas>
      <Interface setModel={setModelName}/>
    </>
  );
}

export default XrHitModelContainer;
