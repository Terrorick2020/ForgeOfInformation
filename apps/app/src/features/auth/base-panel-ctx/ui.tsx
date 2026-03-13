import { AuthBasePanelCtx, useCtx } from "./modle";
import type { JSX } from "react";
import type { ITmplCompProps } from "@/shared";

export function ABPCtxProvider({ children }: ITmplCompProps): JSX.Element {
  const ctxValue = useCtx();

  return (
    <AuthBasePanelCtx.Provider value={ctxValue}>
      {children}
    </AuthBasePanelCtx.Provider>
  );
}

export default ABPCtxProvider;