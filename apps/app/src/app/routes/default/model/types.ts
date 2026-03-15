import type { TTmplHook } from "@/shared";
import type { ENotifiVerPosit, ENotifiHorPosit } from "@/features";

export type TUseSettings = TTmplHook<[], IUseSettingsReturn>;

interface IUseSettingsReturn {
  vertPosit: ENotifiVerPosit;
  horPosit: ENotifiHorPosit;
}
