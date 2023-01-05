import { ComType, Payload } from "../config";
import { onMessage } from "./helper";

export const dispatch = (x: number, y: number) => {
  const payload: Payload = { x, y, currentWindowName: window.name };
  localStorage.setItem('payload', JSON.stringify(payload))
  // console.log(payload);
};

export const receive = (updateFn: (x: number, y: number) => void) => {
  window.addEventListener('storage', () => {
    // When local storage changes, dump the list to the console.
    const data = JSON.parse(window.localStorage.getItem('payload') || '');
    if (data.x && data.y) onMessage(updateFn, data);
  });
};
