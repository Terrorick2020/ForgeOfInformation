import type { EResponseType } from '@libs/config';

export interface IRootStoreSystem {
  notifis: IRSSystemNotifi[];
}

export interface IRSSystemNotifi {
  id: string;
  type: EResponseType;
  title: string;
  text: string;
}
