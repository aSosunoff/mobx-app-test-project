# Mobx App Test Project

## class into use state

```js
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

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

## class out use state

```js
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

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

## decorator

```js
import { makeObservable, observable, action, configure } from "mobx";
import { observer } from "mobx-react";

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

## object

```js
import { observable, configure } from "mobx";
import { observer } from "mobx-react";

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

## useLocalObservable

```js
import { configure } from "mobx";
import { observer, useLocalObservable } from "mobx-react";

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
