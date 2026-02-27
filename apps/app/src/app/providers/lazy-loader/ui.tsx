import { useLazyLoad } from "./modele";
import { Suspense, type JSX } from "react";
import type { LazyLoaderProps } from "./types";

function LazyLoader({ jsxProm }: LazyLoaderProps): JSX.Element {
  const { JsxLazy } = useLazyLoad(jsxProm);

  return (
    <Suspense>
      <JsxLazy />
    </Suspense>
  );
}

export default LazyLoader;
