import type { JSX, ButtonHTMLAttributes } from 'react';

export interface IIconButtonProps {
  icon: JSX.Element
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
}