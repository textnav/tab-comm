import { ComType, IFrames, Payload } from "../config";
import { onMessage } from "./helper";

export const dispatch = (x: number, y: number) => {
  const payload: Payload = { x, y, currentWindowName: window.name };

  if (
    payload.currentWindowName === "iframe1" ||
    payload.currentWindowName === "iframe2"
  ) {
    window.parent.postMessage(payload, window.location.origin);
  }
};

export const receive = (frames: IFrames) => (
  updateFn: (x: number, y: number) => void
) => {
  window.addEventListener("message", (message) => {
    // console.log('message', message)
    const data: Payload = message.data

    if (window.name === "") {
      // this is parent window
      if (data.currentWindowName === "iframe1") {
        // send to iframe2
        frames.frame2?.postMessage(data);
      }
      if (data.currentWindowName === "iframe2") {
        // send to iframe1
        frames.frame1?.postMessage(data);
      }
    }
    onMessage(updateFn, data);
  });
};
