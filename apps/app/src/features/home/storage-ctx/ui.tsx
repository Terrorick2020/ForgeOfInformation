import { HomeStorageCtx, useCtx } from "./model";
import type { JSX } from "react";
import type { ITmplCompProps } from "@/shared";

function HSCtxProvider({ children }: ITmplCompProps): JSX.Element {
  const ctxValue = useCtx();

  return (
    <HomeStorageCtx.Provider value={ctxValue}>
      {children}
    </HomeStorageCtx.Provider>
  );
}

export default HSCtxProvider;
