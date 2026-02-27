import type { ComponentType, JSX } from "react";

export type TTmplSetFn<Args extends any[]> = (...args: Args) => void;

export type TTmplHook<Args extends any[], Return extends any> = (
  ...args: Args
) => Return;

export type TJsxProm<T extends any = {}> = () => Promise<{
  default: ComponentType<T>;
}>;

export type TLazyLoadFn<T extends any = {}> = () => Promise<{
  default: ComponentType<T>;
}>;

export interface ITmplCompProps {
  children: JSX.Element | JSX.Element[]
}