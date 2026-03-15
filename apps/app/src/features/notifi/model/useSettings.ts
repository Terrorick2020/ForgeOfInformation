import {
  ENotifiHorPosit,
  ENotifiVerPosit,
  type TUseSettings,
  type TOrientStyles,
} from ".";

import { useId, useState, useEffect } from "react";

const notifiCtxHorPosit = {
  [ENotifiHorPosit.Left]: {
    left: "0",
    transleteX: "0",
  },
  [ENotifiHorPosit.Center]: {
    left: "50%",
    transleteX: "-50%",
  },
  [ENotifiHorPosit.Rignt]: {
    right: "0",
    transleteX: "0",
  },
} as const;

const notifiCtxVerPosit = {
  [ENotifiVerPosit.Top]: {
    top: "0",
    transleteY: "0",
  },
  [ENotifiVerPosit.Center]: {
    top: "50%",
    transleteY: "-50%",
  },
  [ENotifiVerPosit.Botton]: {
    bottom: "0",
    transleteY: "0",
  },
} as const;

export const useSettings: TUseSettings = (horPosit, verPosit) => {
  const notifiKey = useId();
  const [orientStyles, setOrisentStyles] = useState<TOrientStyles>({
    left: "0",
    top: "0",
    translate: "0 0",
  });

  useEffect(() => {
    const { transleteX, ...horData } = notifiCtxHorPosit[horPosit];
    const { transleteY, ...verData } = notifiCtxVerPosit[verPosit];

    setOrisentStyles({
      ...horData,
      ...verData,
      translate: `${transleteX} ${transleteY}`,
    });
  }, [horPosit, verPosit]);

  return { notifiKey, orientStyles };
};
