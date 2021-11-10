import React from "react";

import { configure } from "mobx";
import { observer, useLocalObservable } from "mobx-react";

configure({ enforceActions: "always" });

//#region useLocalObservable
const useCounter = () =>
  useLocalObservable(() => ({
    count: 0,

    increment() {
      this.count += 1;
    },

    decrement() {
      this.count -= 1;
    },
  }));

export const AppUseLocalObservable = observer<React.FC>(() => {
  const counter = useCounter();

  return (
    <>
      <div>{counter.count}</div>
      <button onClick={counter.increment}>increment</button>
      <button onClick={counter.decrement}>decrement</button>
    </>
  );
});
//#endregion
