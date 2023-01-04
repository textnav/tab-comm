import { createContext } from "react";

export type ComType =
  | "broadcastChannel"
  | "postMessage"
  | "localStorage"
  | "serviceWorker";

export interface Payload {
  x: number;
  y: number;
  currentWindowName: string | "iframe1" | "iframe2";
}

export interface IFrames {
  frame1?: Window;
  frame2?: Window;
}

export const Channel = new BroadcastChannel("my-channel"); // Create a broadcast channel

export const TypeContext = createContext<ComType>("broadcastChannel");

export const FramesContext = createContext<IFrames>({});
