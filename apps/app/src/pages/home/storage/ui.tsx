import { HomeStoreTmpl, HStorageContent } from "@/widgets";
import { HSCtxProvider } from '@/features';
import type { JSX } from "react";
import styles from "./ui.module.scss";

function HomeStoragePage(): JSX.Element {
  return (
    <div className={styles["storage-page"]}>
      <HSCtxProvider>
        <HomeStoreTmpl>
          <HStorageContent />
        </HomeStoreTmpl>
      </HSCtxProvider>
    </div>
  );
}

export default HomeStoragePage;
