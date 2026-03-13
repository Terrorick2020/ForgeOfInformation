import type { JSX } from "react";
import { LazyAppLoader } from "./providers";

export function App(): JSX.Element {
  const jsxProm = async () => import("./Combiner");
  return <LazyAppLoader jsxProm={jsxProm} />;
}
