import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { BroadcastChannel, LocalStorage, PostMessage } from "./Frames";
import { Pointer } from "./Pointer";
import { NoMatch } from "./NoMatch";
import { ComType, FramesContext, IFrames } from "./config";
import { useState } from "react";

function App() {
  const updateFrames = (frame1: Window, frame2: Window) => {
    setFrames({
      frames: {frame1, frame2},
      updateFrames
    })
  }

  const [frames, setFrames] = useState({
    frames: {} as IFrames,
    updateFrames
  })

  return (
    <FramesContext.Provider value={frames}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pointer" element={<Pointer type="postMessage" />} />
          <Route path="postMessage" element={<PostMessage />} />
          <Route path="broadcastChannel" element={<Pointer type="broadcastChannel" />} />
          <Route path="localStorage" element={<Pointer type="localStorage" />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </FramesContext.Provider>
  );
}

export default App;
