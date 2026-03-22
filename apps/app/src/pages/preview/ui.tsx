import { PreviewHeader, PreviewMain, PreviewFooter } from "@/widgets";
import { ScrollBlock } from "@/features";
import { InnerBlockUi } from "@/shared";
import type { JSX } from "react";
import styles from "./styles.module.scss";

function PreviewPage(): JSX.Element {
  return (
    <div className={styles["preview-page"]}>
      <ScrollBlock addClass={styles["add-scrl-class"]}>
        <InnerBlockUi>
          <div className={styles["preview-page__ctx"]}>
            <PreviewHeader />
            <PreviewMain />
            <PreviewFooter />
          </div>
        </InnerBlockUi>
      </ScrollBlock>
    </div>
  );
}

export default PreviewPage;
