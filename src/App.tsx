import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Frames } from "./Frames";
import { Pointer } from "./Pointer";
import { NoMatch } from "./NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pointer" element={<Pointer />} />
        <Route path="frames" element={<Frames />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
