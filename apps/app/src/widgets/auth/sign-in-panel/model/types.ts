import type { ChangeEvent } from "react";
import type { TTmplHook, TTmplSetFn } from "@/shared";

export type TUseSettings = TTmplHook<TUseSettingsArgs, IUseSettingsReturn>;

type TUseSettingsArgs = [];

interface IUseSettingsReturn {
  showLogin: string;
  checked: boolean;
  errValue: ILogPswdValue<boolean>;
  onLoginChange: TTmplSetFn<[event: ChangeEvent<HTMLInputElement>]>;
  onPswdChange: TTmplSetFn<[event: ChangeEvent<HTMLInputElement>]>;
  onCheckedChange: TTmplSetFn<[event: ChangeEvent<HTMLInputElement>]>;
}

export interface ILogPswdValue<T extends any> {
  login: T;
  pswd: T;
}
