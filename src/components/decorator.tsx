import React, { useState } from "react";

import { makeObservable, observable, action, configure } from "mobx";
import { observer } from "mobx-react";

configure({ enforceActions: "always" });

//#region Decorator
class Counter {
  @observable
  count = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  increment = () => {
    this.count += 1;
  };

  @action
  decrement = () => {
    this.count -= 1;
  };
}

const useCounter = () => {
  const [counter] = useState(() => new Counter());

  return { counter };
};

export const AppDecorator = observer<React.FC>(() => {
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
