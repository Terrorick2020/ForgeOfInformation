import { appRoutes } from "@/shared";

interface INavBarLink {
  title: string;
  href: string;
}

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
  }
];
