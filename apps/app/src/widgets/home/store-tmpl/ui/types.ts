import type { ITmplCompProps } from "@/shared";
import type { JSX } from "react";

export interface ISTmplProps extends ITmplCompProps {
  mainAdd?: JSX.Element;
  asideAdd?: JSX.Element;
}
