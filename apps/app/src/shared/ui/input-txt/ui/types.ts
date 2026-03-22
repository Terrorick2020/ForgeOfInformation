import type { InputHTMLAttributes, JSX, Ref } from "react";
import type { ITmplUiProps } from "@/shared";

export type TInputTxtUiEvents = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onBlur" | "onFocus" | "onCopy" | "onKeyDown"
>;

export type TInputTxtUiAttrs = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "placeholder" | "maxLength"
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
    TInputTxtUiAttrs,
    IInputTxtUiExpansion {
  addId?: string;
  ref?: Ref<HTMLInputElement>;
}
