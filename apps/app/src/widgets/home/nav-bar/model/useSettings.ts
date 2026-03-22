import { useLocation } from "react-router-dom";
import { useId } from "react";
import type { TUseSettings, TGetLCReturn } from "./types";

export const useSettings: TUseSettings = () => {
  const navKey = useId();
  const location = useLocation();

  const getLinkAddClass = (href: string): TGetLCReturn => {
    return location.pathname === href ? "selected" : "";
  };

  return { navKey, getLinkAddClass };
};
