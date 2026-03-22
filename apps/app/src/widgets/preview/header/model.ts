import { appRoutes, selectSett } from "@/shared";
import { EProfileRoles } from "@libs/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { TTmplHook, TTmplSetFn } from "@/shared";

export const useSettings: TTmplHook<[], TTmplSetFn> = () => {
  const navigate = useNavigate();
  const { role } = useSelector(selectSett);

  const handleNav = (): void => {
    let navPath: string = `${appRoutes.auth.glob}/${appRoutes.auth.local.signIn}`;

    if (role !== EProfileRoles.None) {
      navPath = `${appRoutes.home.glob}/${appRoutes.home.local.profile}`;
    }

    navigate(navPath);
  };

  return handleNav;
};
