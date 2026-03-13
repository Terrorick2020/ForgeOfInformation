import { BrowserRouter } from "react-router-dom";
import { WallpaperRoutes } from "./Wallpaper";
import type { ITmplCompProps } from "@/shared";
import type { JSX } from "react";

function Router({ children }: ITmplCompProps): JSX.Element {
  return (
    <BrowserRouter>
      <WallpaperRoutes>{children}</WallpaperRoutes>
    </BrowserRouter>
  );
}

export default Router;
