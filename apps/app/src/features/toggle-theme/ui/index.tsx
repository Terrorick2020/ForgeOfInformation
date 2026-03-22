import { IconButtonUi } from "@/shared";
import { useSettings } from "../model";
import type { ITmplUiProps } from "@/shared";
import type { JSX } from "react";
import styles from "./styles.module.scss";
import ThemeSvgr from "./theme.svg?react";

function ToggleTheme({
  addClass = "",
}: Pick<ITmplUiProps, "addClass">): JSX.Element {
  const handleToggleTheme = useSettings();

  return (
    <IconButtonUi
      addClass={`${styles["toggle-theme"]} ${addClass}`}
      icon={<ThemeSvgr />}
      onClick={handleToggleTheme}
    />
  );
}

export default ToggleTheme;
