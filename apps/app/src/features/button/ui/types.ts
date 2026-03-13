import type { ITmplUiProps } from "@/shared";
import type { JSX, ButtonHTMLAttributes } from "react";

export interface IButtonProps
  extends Omit<ITmplUiProps, "children">, ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoad?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}
