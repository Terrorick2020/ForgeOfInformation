import {
  InnerBlockUi,
  EIBUiInnerType,
  AnimeUi,
  EAnimeVertType,
} from "@/shared";

import { Button, ScrollBlock, AuthBasePanelCtx } from "@/features";
import { useContext, type JSX } from "react";
import type { IAuthBasePanelProps } from "./types";
import styles from "./styles.module.scss";

function AuthBasePanel({
  children,
  headTitle,
  btnTitle,
}: IAuthBasePanelProps): JSX.Element {
  const context = useContext(AuthBasePanelCtx);

  return (
    <InnerBlockUi innerType={EIBUiInnerType.Inline}>
      <ScrollBlock addClass={styles["add-scrl-class"]}>
        <main className={styles["scrl-box"]}>
          <AnimeUi
            addClass={styles["add-anime-class"]}
            vertType={EAnimeVertType.FromTop}
            withScale
            withInView
            afterNav
          >
            <InnerBlockUi>
              <div className={styles["base-panel"]}>
                <h2>{headTitle}</h2>
                <div className={styles["base-panel__ctx"]}>{children}</div>
                <Button
                  addClass={styles["btn-add-class"]}
                  title={btnTitle}
                  isLoad={context.isLoad}
                  onClick={context.onHandleClick}
                />
              </div>
            </InnerBlockUi>
          </AnimeUi>
        </main>
      </ScrollBlock>
    </InnerBlockUi>
  );
}

export default AuthBasePanel;
