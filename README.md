# Mobx App Test Project

```js
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// class into use state

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

export const App = observer<React.FC>(() => {
  const { counter } = useCounter();

  return <></>;
});
```

```js
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// class out use state

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

export const App = observer<React.FC>(() => {
  const [counter] = useState(() => new Counter());

  return <></>;
});
```

```js
import { makeObservable, observable, action, configure } from "mobx";
import { observer } from "mobx-react";

// decorator

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

  return <></>;
});
```

```js
import { observable, configure } from "mobx";
import { observer } from "mobx-react";

// object

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

  return <></>;
});
```

```js
import { configure } from "mobx";
import { observer, useLocalObservable } from "mobx-react";

// useLocalObservable

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

  return <></>;
});
```