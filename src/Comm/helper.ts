import { Payload } from "../config";

export const onMessage = (updateFn: any, data: Payload) => {
  if (!data) return;
  const x = data.x;
  const y = data.y;
  updateFn(x, y);
};
