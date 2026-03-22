import type {
  ITmplUiProps,
  TInputTxtUiEvents,
  TInputTxtUiAttrs,
} from "@/shared";

export interface ISearchProps
  extends Pick<ITmplUiProps, "addClass">, TInputTxtUiEvents, TInputTxtUiAttrs {}
