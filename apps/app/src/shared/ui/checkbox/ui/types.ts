import type { ITmplUiProps } from '@/shared';
import type { InputHTMLAttributes } from "react";

export interface ICheckboxUiProps extends Pick<ITmplUiProps, "addClass"> {
  text?: string
  checked?: boolean;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
}
