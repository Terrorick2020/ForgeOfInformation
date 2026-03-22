import type { TTmplHook } from "@/shared";

export type TUseSettings = TTmplHook<[], IUseSettingsReturn>;

interface IUseSettingsReturn {
  keyId: string;
}
