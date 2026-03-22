import type { TTmplHook, TInputTxtUiEvents, TInputTxtUiAttrs } from "@/shared";
import type { ButtonHTMLAttributes, RefObject } from "react";

export type TUseSettings = TTmplHook<TUseSettingsArgs, IUseSettingsReturn>;

type TUseSettingsArgs = [
  value: TInputTxtUiAttrs["value"],
  onChange: TInputTxtUiEvents["onChange"],
];

interface IUseSettingsReturn {
  keyId: string;
  inptRef: RefObject<HTMLInputElement | null>;
  isEmpty: boolean;
  onHandleChange: TInputTxtUiEvents["onChange"];
  handleClear: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}
