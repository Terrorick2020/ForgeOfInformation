import { InnerBlockUi, keyCombs } from "@/shared";
import { PrevKeyCombsItem } from "@/features";
import { useId, type JSX } from "react";
import styles from "./styles.module.scss";

function PreviewMain(): JSX.Element {
  const combsItemKey = `combs-item-${useId()}`;

  return (
    <main className={styles["preview-main"]}>
      <article className={styles["preview-main__ctx"]}>
        <InnerBlockUi>
          <div className={styles["content"]}>
            <div className={styles["headline"]}>
              <h4>Управление клавиатурой</h4>
              <h5>Язык раскладки и регистр символов не имеет значения</h5>
            </div>
            <hr className={styles["line"]} />
            <div className={styles["body"]}>
              {Object.values(keyCombs).map((item, index) => (
                <PrevKeyCombsItem key={`${combsItemKey}-${index}`} {...item} />
              ))}
            </div>
          </div>
        </InnerBlockUi>
      </article>
    </main>
  );
}

export default PreviewMain;
