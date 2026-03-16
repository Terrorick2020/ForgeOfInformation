import { HomeStoreTmpl, HDownloadsContent } from "@/widgets";
import { HSCtxProvider } from "@/features";
import type { JSX } from "react";
import styles from "./ui.module.scss";

function HomeDownloadsPage(): JSX.Element {
  return (
    <div className={styles["downloads-page"]}>
      <HSCtxProvider>
        <HomeStoreTmpl>
          <HDownloadsContent />
        </HomeStoreTmpl>
      </HSCtxProvider>
    </div>
  );
}

export default HomeDownloadsPage;
