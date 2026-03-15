import type { TTmplHook, TTmplSetFn } from "@/shared";
import type { MouseEvent } from 'react';

export interface INavBarLink {
  title: string;
  href: string;
}


export type TUseSettings = TTmplHook<[], IUseSettingsReturn>;

interface IUseSettingsReturn {
  navKey: string;
  getLinkAddClass: (href: string) => TGetLCReturn;
  handleToggleTheme: TTmplSetFn<[event: MouseEvent<HTMLButtonElement>]>;
}

export type TGetLCReturn = "" | "selected";