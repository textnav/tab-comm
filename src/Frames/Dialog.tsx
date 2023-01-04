import * as React from "react";
import { ComType, TypeContext } from "../config";
import Gear from "./Gear";

export const Dialog = () => {
  const dialogElement: any = React.useRef();
  const type = React.useContext(TypeContext);
  const [val, setVal] = React.useState<ComType>(type);

  const showDialog = () => {
    if (dialogElement.current) {
      dialogElement.current.showModal();
    }
  };

  return (
    <TypeContext.Provider value={val}>
      <div className="gear">
        <Gear onClick={showDialog} />
      </div>
      <dialog ref={dialogElement}>
        <form method="dialog">
          <p>
            <label>
              Type:
              <select
                onChange={(event) => setVal(event.target.value as ComType)}
              >
                <option>broadcastChannel</option>
                <option>postMessage</option>
                <option>localStorage</option>
                <option>serviceWorker</option>
              </select>
            </label>
          </p>
          <div>
            <button type="submit">Ok</button>
          </div>
        </form>
      </dialog>
    </TypeContext.Provider>
  );
};
