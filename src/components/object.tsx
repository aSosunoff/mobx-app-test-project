import React, { useState } from "react";

import { observable, configure } from "mobx";
import { observer } from "mobx-react";

configure({ enforceActions: "always" });

//#region Object
const useCounter = () => {
  const [counter] = useState(() =>
    observable({
      count: 0,

      increment() {
        this.count += 1;
      },

      decrement() {
        this.count -= 1;
      },
    })
  );

  return { counter };
};

export const AppObject = observer<React.FC>(() => {
  const { counter } = useCounter();

  return (
    <>
      <div>{counter.count}</div>
      <button onClick={() => counter.increment()}>increment</button>
      <button onClick={() => counter.decrement()}>decrement</button>
    </>
  );
});
//#endregion
