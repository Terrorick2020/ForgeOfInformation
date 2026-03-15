import { toggleTheme } from '@/shared';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { useId, type MouseEvent } from "react";
import type { TUseSettings, TGetLCReturn } from './types';
import type { TRootDispatch } from '@/shared';

export const useSettings: TUseSettings = () => {
  const navKey = useId();
  const dispatch = useDispatch<TRootDispatch>();
  const location = useLocation();

  const getLinkAddClass = (href: string): TGetLCReturn => {
    return location.pathname === href 
      ? "selected"
      : "";
  }

  const handleToggleTheme = (_event: MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleTheme());
  }

  return { navKey, getLinkAddClass, handleToggleTheme };
};
