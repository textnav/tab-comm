import { useCallback, useContext, useEffect } from "react";
import "./Pointer.css";
import { handleMouseMove, setup } from "./pointerSetup";
import * as channel from "../Comm/BroadcastChannel";
import * as postMessage from "../Comm/PostMessage";
import { FramesContext, TypeContext } from "../config";

export function Pointer(): JSX.Element {
  const type = useContext(TypeContext);
  const frames = useContext(FramesContext);

  useEffect(() => {
    setup();
    channel.receive(type, handleMouseMove);
    postMessage.receive(type, frames)(handleMouseMove);
  }, [type, frames]);

  const onMouseMove = useCallback(
    (e: any) => {
      const { clientX, clientY } = e;
      handleMouseMove(clientX, clientY);
      console.log(type);

      switch (type) {
        case "broadcastChannel": {
          channel.dispatch(clientX, clientY);
          break;
        }
        case "postMessage": {
          postMessage.dispatch(clientX, clientY);
          break;
        }
        default:
          break;
      }
    },
    [type]
  );

  return <svg onMouseMove={onMouseMove} id="container"></svg>;
}
