import { useInitial, useAnime, EAnimeHorType, EAnimeVertType } from "../model";
import { EAnimeTmplType } from "@/shared";
import { motion } from "framer-motion";
import { memo, type JSX } from "react";
import type { IAnimeUiProps } from "./types";
import styles from "./styles.module.scss";

function AnimeUi({
  children,
  addClass = "",
  tmplType = EAnimeTmplType.Widget,
  horType = EAnimeHorType.FromCenter,
  vertType = EAnimeVertType.FromCenter,
  withScale = false,
  withLeave = false,
  withInView = false,
  afterNav = false,
}: IAnimeUiProps): JSX.Element {
  const { animeRef, isInView } = useInitial();
  const { initialData, exitionData, animateData, transitData } = useAnime(
    tmplType,
    horType,
    vertType,
    withScale,
    afterNav,
  );

  return (
    <motion.div
      ref={animeRef}
      className={`${styles["anime-ui"]} ${addClass}`}
      initial={initialData}
      transition={transitData}
      animate={isInView || !withInView ? animateData : initialData}
      exit={withLeave ? exitionData : undefined}
    >
      {children}
    </motion.div>
  );
}

export default memo(AnimeUi);
