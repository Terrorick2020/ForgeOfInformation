import type { ITmplCompProps } from "@/shared";
import type { JSX } from "react";

export interface ISTmplProps extends ITmplCompProps {
  panelCtx?: JSX.Element;
  panelAdd?: JSX.Element;
}
