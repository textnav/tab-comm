import * as React from "react";
import { IFrames, FramesContext } from "../config";
import "./Frames.css";
import * as postMessage from "../Comm/PostMessage";
import { handleMouseMove } from "../Pointer/pointerSetup";

const URL = window.location.origin

export const PostMessage = () => {
  const frame1: any = React.useRef();
  const frame2: any = React.useRef();

  const {updateFrames} = React.useContext(FramesContext);

  React.useEffect(() => {
    const frames = {
      frame1: frame1?.current?.contentWindow,
      frame2: frame2?.current?.contentWindow,
    }
    updateFrames(frames.frame1, frames.frame2);

    // receive message in parent frame and relay to another child
    if (frames) postMessage.receive(frames)(handleMouseMove);
  }, [frame1?.current, frame2?.current]);

  return (
    <section>
      <iframe
        ref={frame1}
        title="pointer"
        name="iframe1"
        src={URL + '/pointer'}
      />
      <iframe
        ref={frame2}
        title="pointer"
        name="iframe2"
        src={URL + '/pointer'}
      />
    </section>
  );
};
