import React, { useState } from "react";

import { makeAutoObservable, configure } from "mobx";
import { observer } from "mobx-react";

configure({ enforceActions: "always" });

//#region Class out use state
class Counter {
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
}

export const AppClassOutUseState = observer<React.FC>(() => {
  const [counter] = useState(() => new Counter());

  return (
    <>
      <div>{counter.count}</div>
      <button onClick={counter.increment}>increment</button>
      <button onClick={counter.decrement}>decrement</button>
    </>
  );
});
//#endregion
