import type { InputHTMLAttributes, JSX } from "react";
import type { ITmplUiProps } from "@/shared";

export type TInputTxtUiEvents = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onBlur" | "onFocus" | "onCopy" | "onKeyDown"
>;

export type TInputTxtUiAtrs = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "placeholder"
>;

export interface IInputTxtUiExpansion {
  type?: "text" | "email" | "password" | "number";
  startIcon?: JSX.Element | null;
  endIcon?: JSX.Element | null;
}

export interface IInputTxtUiProps
  extends
    Omit<ITmplUiProps, "children">,
    TInputTxtUiEvents,
    TInputTxtUiAtrs,
    IInputTxtUiExpansion {
  addId?: string;
}
