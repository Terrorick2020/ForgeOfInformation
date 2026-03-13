import type {
  ITmplUiProps,
  TInputTxtUiEvents,
  TInputTxtUiAtrs,
  IInputTxtUiExpansion,
} from "@/shared";

export interface IFormControlProps
  extends
    Omit<ITmplUiProps, "children">,
    TInputTxtUiEvents,
    TInputTxtUiAtrs,
    IInputTxtUiExpansion {
  label: string;
  isErr?: boolean;
  errTxt?: string;
}
