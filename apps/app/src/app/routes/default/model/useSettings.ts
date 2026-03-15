import { useState, useEffect } from 'react';
import { ENotifiVerPosit, ENotifiHorPosit } from "@/features";
import { rootMinSize } from '@/shared';
import type { TUseSettings } from '.';

export const useSettings: TUseSettings = () => {
  const [vertPosit, setVertPosit] = useState<ENotifiVerPosit>(ENotifiVerPosit.Botton);
  const [horPosit, setHorPosit] = useState<ENotifiHorPosit>(ENotifiHorPosit.Rignt);

  const updPosit = (): void => {
    if(window.innerWidth <= rootMinSize) {
      setVertPosit(ENotifiVerPosit.Top);
      setHorPosit(ENotifiHorPosit.Center);
    } else {
      setVertPosit(ENotifiVerPosit.Botton);
      setHorPosit(ENotifiHorPosit.Rignt);
    }
  };

  useEffect(() => {
    updPosit();

    window.addEventListener("resize", updPosit);

    return () => {
      window.removeEventListener("resize", updPosit);
    };
  }, []);

  return { vertPosit, horPosit };
};
