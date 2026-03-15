import type { ITmplCompProps, IRSSystemNotifi} from "@/shared";
import type { ENotifiHorPosit, ENotifiVerPosit, TCloseNotify } from "../model";

export interface INotifiProps extends ITmplCompProps {
  horPosit?: ENotifiHorPosit;
  verPosit?: ENotifiVerPosit;
}

export interface INotifiItemProps extends Omit<IRSSystemNotifi, "id"> {
  closeNotifi: ReturnType<TCloseNotify>;
  closeMs: number;
}
