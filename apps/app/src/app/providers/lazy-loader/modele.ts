import {
  rootDivsName,
  rootAnimeMs,
  emptyDelay,
  type TLazyLoadFn,
} from "@/shared";

import { lazy } from "react";
import type { TUseLazyLoad } from "./types";

async function fadeOutPreloader(start: number): Promise<void> {
  const prelHtml = document.getElementById(rootDivsName.preloader);
  const rootHtml = document.getElementById(rootDivsName.root);

  if (!prelHtml || !rootHtml)
    throw new Error("Родительские компоненты не найдены");

  const elapsed = performance.now() - start;
  if (elapsed < rootAnimeMs.page)
    await emptyDelay(rootAnimeMs.page - elapsed);

  prelHtml.style.animation = `fadeOut ease-in ${rootAnimeMs.page}ms forwards`;
  rootHtml.style.animation = `fadeIn ease-in ${rootAnimeMs.page}ms forwards`;

  await emptyDelay(rootAnimeMs.page);

  prelHtml.remove();
  rootHtml.style.display = "block";
}

export const useLazyLoad: TUseLazyLoad = (jsxProm) => {
  const lazyLoad: TLazyLoadFn = async () => {
    const start = performance.now();

    const result = await jsxProm();

    await fadeOutPreloader(start);

    return result;
  };

  return { JsxLazy: lazy(() => lazyLoad()) };
};
