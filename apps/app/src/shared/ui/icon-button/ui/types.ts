import type { ITmplUiProps } from '@/shared';
import type { JSX, ButtonHTMLAttributes } from "react";

export interface IIconButtonProps extends Omit<ITmplUiProps, "children"> {
  icon: JSX.Element;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}
