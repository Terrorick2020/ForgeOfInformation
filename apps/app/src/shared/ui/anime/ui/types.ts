import type { EAnimeHorType, EAnimeVertType } from '../model';
import type { ITmplUiProps, EAnimeTmplType } from "@/shared";

export interface IAnimeUiProps extends ITmplUiProps {
  tmplType?: EAnimeTmplType;
  horType?: EAnimeHorType;
  vertType?: EAnimeVertType;
  withScale?: boolean;
  withLeave?: boolean;
  withInView?: boolean;
  afterNav?: boolean;
}
