import type { JSX } from "react";
import { LazyLoader } from "./providers";

export function App(): JSX.Element {
  const jsxProm = async () => import("./Combiner");
  return <LazyLoader jsxProm={jsxProm} />;
}
