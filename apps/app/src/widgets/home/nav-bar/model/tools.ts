import { appRoutes } from "@/shared";
import type { INavBarLink } from "./types";

export const navBarLinks: INavBarLink[] = [
  {
    title: "Загрузки",
    href: `${appRoutes.home.glob}/${appRoutes.home.local.downloads}`,
  },
  {
    title: "Хранилище",
    href: `${appRoutes.home.glob}/${appRoutes.home.local.storage}`,
  },
  {
    title: "Помощьник",
    href: `${appRoutes.home.glob}/${appRoutes.home.local.chat}`,
  },
];

export const userHref = `${appRoutes.home.glob}/${appRoutes.home.local.profile}`;
