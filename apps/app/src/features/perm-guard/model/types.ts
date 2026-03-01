import type { ReactNode } from "react";
import type { TTmplHook } from "@/shared";
import type { EProfileRoles } from "@libs/config";

export interface IPermGuardProps {
  permList: EProfileRoles[];
  sucRes: ReactNode;
  errRes?: ReactNode;
}

export type TUsePermGuard = TTmplHook<TUseThemeArgs, TUseThemeReturn>;
type TUseThemeArgs = [];

interface TUseThemeReturn {
  role: EProfileRoles;
}
