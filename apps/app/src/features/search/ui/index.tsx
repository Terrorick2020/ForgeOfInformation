import { InputTxtUi, IconButtonUi } from "@/shared";
import { useSettings } from "../model";
import { memo, type JSX } from "react";
import type { ISearchProps } from "./types";
import styles from "./styles.module.scss";
import MagnifierSvgr from "@/shared/assets/icons/magnifier.svg?react";
import PlusSvgr from "@/shared/assets/icons/plus.svg?react";

function Search({
  addClass = "",
  value,
  onChange,
  ...props
}: ISearchProps): JSX.Element {
  const { keyId, inptRef, isEmpty, onHandleChange, handleClear } = useSettings(
    value,
    onChange,
  );

  return (
    <InputTxtUi
      ref={inptRef}
      addId={keyId}
      addClass={`${styles["search"]} ${addClass}`}
      startIcon={<MagnifierSvgr className={styles["mgnf-svgr"]} />}
      endIcon={
        isEmpty ? (
          <></>
        ) : (
          <IconButtonUi
            addClass={styles["add-icbtn-class"]}
            icon={<PlusSvgr className={styles["plus-svgr"]} />}
            onClick={handleClear}
          />
        )
      }
      value={value}
      onChange={onHandleChange}
      {...props}
    />
  );
}

export default memo(Search);
