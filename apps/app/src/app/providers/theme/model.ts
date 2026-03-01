import { themeAttrName } from "@/shared";
import { selectSett } from "@/shared";
import { useSelector } from "react-redux";
import type { TUseTheme } from "./types";

export const useTheme: TUseTheme = () => {
  const { theme } = useSelector(selectSett);
  document.documentElement.setAttribute(themeAttrName, theme);
};
