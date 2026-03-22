import { useDispatch } from "react-redux";
import { toggleTheme } from "@/shared";
import type { MouseEvent } from "react";
import type { TRootDispatch, TTmplHook, TTmplSetFn } from "@/shared";

export const useSettings: TTmplHook<
  [],
  TTmplSetFn<[event: MouseEvent<HTMLButtonElement>]>
> = () => {
  const dispatch = useDispatch<TRootDispatch>();

  const handleToggleTheme = (_event: MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleTheme());
  };

  return handleToggleTheme;
};
