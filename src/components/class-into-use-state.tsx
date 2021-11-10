import React, { useState } from "react";

import { makeAutoObservable, configure } from "mobx";
import { observer } from "mobx-react";

configure({ enforceActions: "always" });

//#region Class into use state
const useCounter = () => {
  const [counter] = useState(
    () =>
      new (class Counter {
        count = 0;

        constructor() {
          makeAutoObservable(this);
        }

        increment = () => {
          this.count += 1;
        };

        decrement = () => {
          this.count -= 1;
        };
      })()
  );

  return { counter };
};

export const AppClassIntoUseState = observer<React.FC>(() => {
  const { counter } = useCounter();

  return (
    <>
      <div>{counter.count}</div>
      <button onClick={counter.increment}>increment</button>
      <button onClick={counter.decrement}>decrement</button>
    </>
  );
});
//#endregion
