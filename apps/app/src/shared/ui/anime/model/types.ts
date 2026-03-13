import type { RefObject } from "react";
import type { TTmplHook, EAnimeTmplType } from "@/shared";
import type { MotionProps } from "motion/react";

export enum EAnimeHorType {
  FromLeft = "from-hor-left",
  FromRight = "from-hor-right",
  FromCenter = "from-hor-center",
}

export enum EAnimeVertType {
  FromTop = "from-vert-top",
  FromBottom = "from-vert-bottom",
  FromCenter = "from-vert-center",
}

export type TUseInitial = TTmplHook<TUseInitialArgs, IUseInitialReturn>;

type TUseInitialArgs = [];

export interface IUseInitialReturn {
  animeRef: RefObject<HTMLDivElement | null>;
  isInView: boolean;
}

export type TInitTmplData = Record<EAnimeTmplType, IInitTmplDataBody>;

interface IInitTmplDataBody {
  time: number;
  coef: number;
  scale: number;
  initOpacity: number;
}

export interface IInitOrientData<T extends string | number | symbol> {
  baseValue: number;
  directions: Record<T, number>;
}

export interface IGetAnimeDataReturn {
  tmplData: IInitTmplDataBody;
  x: number;
  y: number;
}

export type TUseAnime = TTmplHook<TUseAnimeArgs, IUseAnimeReturn>;

type TUseAnimeArgs = [
  tmplType: EAnimeTmplType,
  horType: EAnimeHorType,
  vertType: EAnimeVertType,
  withScale: boolean,
  afterNav: boolean,
];

interface IUseAnimeReturn {
  animateData: MotionProps["animate"];
  initialData: MotionProps["initial"];
  exitionData: MotionProps["exit"];
  transitData: MotionProps["transition"];
}
