import { useCallback, useEffect } from "react";
import "./Pointer.css";
import { handleMouseMove, setup } from "./pointerSetup";

import * as channel from "../Comm/BroadcastChannel";
import * as postMessage from "../Comm/PostMessage";
import * as localStorage from "../Comm/Localstorage";

import { ComType } from "../config";

export function Pointer({type}: {type: ComType}): JSX.Element {

  useEffect(() => {
    setup();
  }, []);
  
  useEffect(() => {
    switch (type) {
      case "broadcastChannel": {
        channel.receive(type, handleMouseMove);
        break;
      }
      case "postMessage": {
        postMessage.receive({})(handleMouseMove);
        break;
      }
      case "localStorage": {
        localStorage.receive(handleMouseMove);
        break;
      }
      default:
        break;
    }
  }, [type]);

  const onMouseMove = useCallback(
    (e: any) => {
      const { clientX, clientY } = e;
      handleMouseMove(clientX, clientY);
      // console.log('type', type, frames)

      switch (type) {
        case "broadcastChannel": {
          channel.dispatch(clientX, clientY);
          break;
        }
        case "postMessage": {
          postMessage.dispatch(clientX, clientY);
          break;
        }
        case "localStorage": {
          localStorage.dispatch(clientX, clientY);
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
