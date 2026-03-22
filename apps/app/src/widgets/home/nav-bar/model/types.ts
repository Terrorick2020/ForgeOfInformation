import type { TTmplHook } from "@/shared";

export interface INavBarLink {
  title: string;
  href: string;
}

export type TUseSettings = TTmplHook<[], IUseSettingsReturn>;

interface IUseSettingsReturn {
  navKey: string;
  getLinkAddClass: (href: string) => TGetLCReturn;
}

export type TGetLCReturn = "" | "selected";
