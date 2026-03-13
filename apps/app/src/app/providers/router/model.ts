import { useLocation } from "react-router-dom";
import { appRoutes } from "@/shared";

function getAnimeKey(locPath: string): string {
  for (let key in appRoutes) {
    const routeKey = key as keyof typeof appRoutes;
    const route = appRoutes[routeKey];

    if (typeof route !== "object" || !("glob" in route)) continue;

    if (locPath.includes(route.glob)) {
      return "isSpecBlock" in route && route.isSpecBlock ? route.glob : locPath;
    }
  }

  return locPath;
}

export const useWallpaper = () => {
  const location = useLocation();
  const animeKey = getAnimeKey(location.pathname);

  return { location, animeKey };
};
