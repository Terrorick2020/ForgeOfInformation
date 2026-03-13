import { Routes } from "react-router-dom";
import { useWallpaper } from "../model";
import { AnimatePresence } from "framer-motion";
import type { ITmplCompProps } from "@/shared";
import type { JSX } from "react";

export function WallpaperRoutes({ children }: ITmplCompProps): JSX.Element {
  const { location, animeKey } = useWallpaper();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={animeKey}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}
