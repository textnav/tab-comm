import * as React from "react";
import { IFrames, FramesContext } from "../config";
import { Dialog } from "./Dialog";
import "./Frames.css";

export const Frames = () => {
  const frame1: any = React.useRef();
  const frame2: any = React.useRef();

  const [frames, setFrames] = React.useState<IFrames>({});

  React.useEffect(() => {
    setFrames({
      frame1: frame1.current.window,
      frame2: frame2.current.window
    });
  }, []);

  return (
    <FramesContext.Provider value={frames}>
      <section>
        <iframe
          ref={frame1}
          title="pointer"
          name="frame1"
          src="https://9ozpe0.sse.codesandbox.io/pointer"
        />
        <iframe
          ref={frame2}
          title="pointer"
          name="frame2"
          src="https://9ozpe0.sse.codesandbox.io/pointer"
        />
        <Dialog />
      </section>
    </FramesContext.Provider>
  );
};
