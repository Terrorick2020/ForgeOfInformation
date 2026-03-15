import {
  AnimeUi,
  IconButtonUi,
  EAnimeHorType,
  EAnimeVertType,
  EAnimeTmplType,
} from "@/shared";

import { useItem } from "../model";
import { memo, type JSX } from "react";
import type { INotifiItemProps } from "./types";
import styles from "./Item.module.scss";
import PlusSvgr from "@/shared/assets/icons/plus.svg?react";

function NotifiItem({
  type,
  title,
  text,
  closeMs,
  closeNotifi,
}: INotifiItemProps): JSX.Element {
  const { Icon } = useItem(type, closeMs, closeNotifi);

  return (
    <AnimeUi
      addClass={`${styles["notifi-item"]} ${styles[type]}`}
      tmplType={EAnimeTmplType.Block}
      horType={EAnimeHorType.FromRight}
      vertType={EAnimeVertType.FromBottom}
      withScale
      withLeave
    >
      <article className={styles["notifi-item__ctx"]}>
        <div className={styles["icon"]}>
          <Icon />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["content__title"]}>{title}</h4>
          <h6 className={styles["content__txt"]}>{text}</h6>
        </div>
        <div className={styles["event"]}>
          <IconButtonUi
            addClass={styles["add-icon-btn-class"]}
            icon={<PlusSvgr className={styles["svgr"]} />}
            onClick={closeNotifi}
          />
        </div>
      </article>
    </AnimeUi>
  );
}

export default memo(NotifiItem);
