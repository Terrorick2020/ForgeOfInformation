import type { ITmplCompProps } from "@/shared";

export interface IInnerBlockUiProps extends ITmplCompProps {
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
