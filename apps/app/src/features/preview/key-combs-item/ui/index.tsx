import { EIBUiBoxType, InnerBlockUi, type TKeysCombItem } from "@/shared";
import { useId, type JSX } from "react";
import styles from "./index.module.scss";
import PKCItemInner from "./Inner";

function PrevKeyCombsItem({ purpose, commands }: TKeysCombItem): JSX.Element {
  const combsItemKey = `combs-item-${useId()}`;

  return (
    <article className={styles["combs-item"]}>
      <InnerBlockUi boxType={EIBUiBoxType.Local}>
        <div className={styles["combs-item__ctx"]}>
          <h6 className={styles["headline"]}>{purpose}:</h6>
          <ul className={styles["list"]}>
            {Object.values(commands).map((item, index) => (
              <PKCItemInner key={`${combsItemKey}-${index}`} {...item} />
            ))}
          </ul>
        </div>
      </InnerBlockUi>
    </article>
  );
}

export default PrevKeyCombsItem;
