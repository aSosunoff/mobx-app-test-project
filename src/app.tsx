import React from "react";
import { AppClassIntoUseState } from "./components/class-into-use-state";
import { AppClassOutUseState } from "./components/class-out-use-state";
import { AppDecorator } from "./components/decorator";
import { AppObject } from "./components/object";
import { AppUseLocalObservable } from "./components/use-local-observable";

export const App: React.FC = () => {
  return (
    <>
      <AppClassIntoUseState />

      <AppClassOutUseState />

      <AppDecorator />

      <AppObject />

      <AppUseLocalObservable />
    </>
  );
};
