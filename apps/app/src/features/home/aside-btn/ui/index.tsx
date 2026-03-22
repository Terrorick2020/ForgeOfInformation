import { IconButtonUi } from "@/shared";
import type { JSX } from "react";
import styles from "./styles.module.scss";
import DownloadSvgr from "@/shared/assets/icons/download.svg?react";

function HDownloadsBtn(): JSX.Element {
  return (
    <IconButtonUi withDwnld icon={<DownloadSvgr className={styles["dwnld-svgr"]} />} />
  );
}

export default HDownloadsBtn;
