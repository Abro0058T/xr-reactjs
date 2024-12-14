import { Route, Routes } from "react-router-dom";
import "./App.css"
import CubeContainer from "./components/cube/CubeContainer";
import XrCubeContainer from "./components/xr-cube/XrCubeContainer";
import XrHitCubeContainer from "./components/xr-hit-cube/XrHitCubeContainer";
import XrHitModelContainer from "./components/xr-hit-model/XrHitModelContainer";

function App() {
  return <div className="mainDiv">
    <Routes>
      <Route path="/" element={<XrHitModelContainer/>} />

    </Routes>
  </div>;
}

export default App;
