import {
  EAnimeHorType,
  EAnimeVertType,
  type TInitTmplData,
  type IInitOrientData,
  type IGetAnimeDataReturn,
  type TUseAnime,
} from ".";

import { rootAnimeMs, rootAnimeFunc, EAnimeTmplType } from "@/shared";
import type { MotionProps } from "motion/react";

const initTmplData: TInitTmplData = {
  [EAnimeTmplType.Page]: {
    time: rootAnimeMs[EAnimeTmplType.Page],
    coef: 1,
    scale: 0.98,
    initOpacity: 0,
  },
  [EAnimeTmplType.Widget]: {
    time: rootAnimeMs[EAnimeTmplType.Widget],
    coef: 0.75,
    scale: 0.94,
    initOpacity: 0.1,
  },
  [EAnimeTmplType.Block]: {
    time: rootAnimeMs[EAnimeTmplType.Block],
    coef: 0.5,
    scale: 0.9,
    initOpacity: 0.2,
  },
} as const;

const initHorData: IInitOrientData<EAnimeHorType> = {
  baseValue: 50,
  directions: {
    [EAnimeHorType.FromRight]: 1,
    [EAnimeHorType.FromCenter]: 0,
    [EAnimeHorType.FromLeft]: -1,
  },
} as const;

const initVertData: IInitOrientData<EAnimeVertType> = {
  baseValue: 50,
  directions: {
    [EAnimeVertType.FromTop]: -1,
    [EAnimeVertType.FromCenter]: 0,
    [EAnimeVertType.FromBottom]: 1,
  },
} as const;

function getAnimeData(
  tmplType: EAnimeTmplType,
  horType: EAnimeHorType,
  vertType: EAnimeVertType,
): IGetAnimeDataReturn {
  const tmplData = initTmplData[tmplType];
  const x =
    initHorData.baseValue * initHorData.directions[horType] * tmplData.coef;
  const y =
    initVertData.baseValue * initVertData.directions[vertType] * tmplData.coef;

  return { tmplData, x, y };
}

export const useAnime: TUseAnime = (
  tmplType,
  horType,
  vertType,
  withScale,
  afterNav,
) => {
  const resData = getAnimeData(tmplType, horType, vertType);

  const animateData: MotionProps["animate"] = {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  };
  const initialData: MotionProps["initial"] = {
    x: resData.x,
    y: resData.y,
    opacity: resData.tmplData.initOpacity,
    scale: withScale ? resData.tmplData.scale : 1,
  };
  const exitionData: MotionProps["exit"] = {
    ...initialData,
    transition: { delay: 0, duration: (resData.tmplData.time / 1000) * 0.5 },
  };
  const transitData: MotionProps["transition"] = {
    duration: resData.tmplData.time / 1000,
    delay: afterNav
      ? (rootAnimeMs[EAnimeTmplType.Page] - resData.tmplData.time) / 1000
      : 0,
    ease: rootAnimeFunc.motion,
  };

  return { initialData, exitionData, animateData, transitData };
};
