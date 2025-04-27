import React from "react";
import StoreProvider from "./store";

export function Provider({ children }: { children: JSX.Element }) {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  )
}
