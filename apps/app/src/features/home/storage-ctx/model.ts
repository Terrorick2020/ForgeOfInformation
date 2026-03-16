import { createContext } from "react";
import type { TTmplHook } from "@/shared";

interface IHomeStorageCtx {}

export const HomeStorageCtx = createContext<IHomeStorageCtx>({});

export const useCtx: TTmplHook<[], {}> = () => {
  return {};
};
