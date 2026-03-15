import type { TTmplHook, TTmplSetFn, IRSSystemNotifi } from "@/shared";
import type { EResponseType } from "@libs/config";
import type { MouseEvent, FC, SVGProps } from "react";

export enum ENotifiHorPosit {
  Left = "left",
  Center = "center",
  Rignt = "right",
}

export enum ENotifiVerPosit {
  Top = "top",
  Center = "center",
  Botton = "bottom",
}

export type TUseSettings = TTmplHook<TUseSettingsArgs, IUseSettingsReturn>;
type TUseSettingsArgs = [horPosit: ENotifiHorPosit, verPosit: ENotifiVerPosit];

export interface IUseSettingsReturn {
  notifiKey: string;
  orientStyles: TOrientStyles;
}

export type TOrientStyles =
  | { left: string; top: string; translate: string }
  | { left: string; bottom: string; translate: string }
  | { right: string; top: string; translate: string }
  | { right: string; bottom: string; translate: string };

export type TUseNotifi = TTmplHook<[], IUseNotifiReturn>;

interface IUseNotifiReturn {
  notifiList: IRSSystemNotifi[];
  closeNotifi: TCloseNotify;
}

export type TCloseNotify = (
  id: IRSSystemNotifi["id"],
) => TTmplSetFn<[event?: MouseEvent<HTMLButtonElement>]>;

export type TNISvgrFromType = Record<EResponseType, NTSvgrFromTypeValue>;
type NTSvgrFromTypeValue = FC<SVGProps<SVGSVGElement>>;

export type TUseItem = TTmplHook<TUseItemArgs, IUseItemReturn>;
type TUseItemArgs = [
  type: EResponseType,
  closeMs: number,
  closeNotifi: ReturnType<TCloseNotify>,
];

interface IUseItemReturn {
  Icon: NTSvgrFromTypeValue;
}
