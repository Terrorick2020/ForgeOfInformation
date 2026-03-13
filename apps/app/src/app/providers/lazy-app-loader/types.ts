import type { ComponentType, LazyExoticComponent } from "react";
import type { TTmplHook, TJsxProm } from "@/shared";

export interface LazyLoaderProps {
  jsxProm: TJsxProm<{}>;
}

export type TUseLazyLoad = TTmplHook<TUseLazyLoadArgs, IUseLazyLoadReturn>;

type TUseLazyLoadArgs = [jsxProm: TJsxProm<{}>];

interface IUseLazyLoadReturn {
  JsxLazy: LazyExoticComponent<ComponentType<{}>>;
}
