import { Channel, ComType, Payload } from "../config";
import { onMessage } from "./helper";

export const dispatch = (x: number, y: number) => {
  const payload: Payload = { x, y, currentWindowName: window.name };
  Channel.postMessage(payload);
  // console.log(payload);
};

export const receive = (
  type: ComType,
  updateFn: (x: number, y: number) => void
) => {
  Channel.onmessage = ({ data }: { data: Payload }) => {
    // console.log("receive", data);
    if (type !== "broadcastChannel") return;
    onMessage(updateFn, data);
  };
};
