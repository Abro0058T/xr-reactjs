import { Route, Routes } from "react-router-dom";
import "./App.css"
import CubeContainer from "./components/cube/CubeContainer";
import XrCubeContainer from "./components/xr-cube/XrCubeContainer";

function App() {
  return <div className="mainDiv">
    <Routes>
      <Route path="/" element={<XrCubeContainer/>} />
      <Route path="/cube" element={<CubeContainer/>} />
      <Route path="/xr-cube" element={<XrCubeContainer/>} />

    </Routes>
  </div>;
}

export default App;
