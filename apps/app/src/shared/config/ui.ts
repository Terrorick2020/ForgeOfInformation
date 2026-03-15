export const rootDivsName = {
  preloader: "preloader",
  root: "root",
} as const;

export enum EAnimeTmplType {
  Page = "page",
  Widget = "widgets",
  Block = "block",
}

export const rootAnimeMs = {
  [EAnimeTmplType.Page]: 1500,
  [EAnimeTmplType.Widget]: 800,
  [EAnimeTmplType.Block]: 400,
} as const;

export const themeAttrName: string = "data-theme";
export const rootAnimeFunc = {
  css: "ease-in",
  motion: "easeIn"
} as const;

export const rootMinSize: number = 650;
