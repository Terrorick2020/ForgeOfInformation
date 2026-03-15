import type { ETheme, EProfileRoles, EProfileStatus } from "@libs/config";

export interface IRootStoreSettings {
  theme: ETheme;
  status: EProfileStatus;
  role: EProfileRoles;
  maxNotifiCount: number;
}
