import type { ITmplUiProps } from '@/shared';
import type { JSX, ButtonHTMLAttributes, ChangeEventHandler } from "react";

export interface IIconButtonProps extends Omit<ITmplUiProps, "children"> {
  icon: JSX.Element;
  withDwnld?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
