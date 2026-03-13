import type { ComponentType, JSX } from "react";

export type TTmplSetFn<
  Args extends any[] = [],
  Async extends boolean = false,
> = (...args: Args) => Async extends true ? Promise<void> : void;

export type TTmplHook<Args extends any[], Return extends any> = (
  ...args: Args
) => Return;

export type TJsxProm<T extends any = {}> = () => Promise<{
  default: ComponentType<T>;
}>;

export type TLazyLoadFn<T extends any = {}> = () => Promise<{
  default: ComponentType<T>;
}>;

export type TTmplKesToType<KEY extends any = {}, TYPE extends any = string> = {
  [K in keyof KEY]: TYPE;
};

export interface ITmplCompProps {
  children: JSX.Element | JSX.Element[];
}

export interface ITmplUiProps extends ITmplCompProps {
  addClass?: string;
}
