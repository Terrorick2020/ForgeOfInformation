import type { ITmplUiProps } from "@/shared";

export interface IInnerBlockUiProps extends ITmplUiProps {
  boxType?: EIBUiBoxType;
  innerType?: EIBUiInnerType;
}

export enum EIBUiBoxType {
  Glob = 'glob',
  Local = 'local',
}

export enum EIBUiInnerType {
  Block = 'block',
  Inline = 'inline',
  Full = 'full',
}
