import {
  selectSett,
  selectSys,
  delNotifi,
  emptyDelay,
  rootAnimeMs,
  EAnimeTmplType,
  type IRSSystemNotifi,
  type TRootDispatch,
} from "@/shared";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import type { TUseNotifi, TCloseNotify } from ".";

const reselUseNotifi = createSelector(
  [selectSett, selectSys],
  (settings, system) => ({
    maxNotifiCount: settings.maxNotifiCount,
    notifis: system.notifis,
  }),
);

const setTime: number = 100;
export const delTime: number = 3000;

export const useNotifi: TUseNotifi = () => {
  const dispatch = useDispatch<TRootDispatch>();
  const isReady = useRef<boolean>(false);
  const { maxNotifiCount, notifis } = useSelector(reselUseNotifi);
  const [notifiList, setNotifiList] = useState<IRSSystemNotifi[]>([]);

  const closeNotifi =
    (id: IRSSystemNotifi["id"]): ReturnType<TCloseNotify> =>
    (_event?: MouseEvent<HTMLButtonElement>): void => {
      setNotifiList((prev) => prev.filter((item) => item.id !== id));
    };

  const addNotify = async (newItem: IRSSystemNotifi): Promise<void> => {
    while (!isReady.current) {
      await emptyDelay(250);
    }

    if (notifiList.length >= maxNotifiCount) {
      setNotifiList((prev) => prev.slice(1));
      await emptyDelay(setTime);
    }

    setNotifiList((prev) => [...prev, newItem]);
    dispatch(delNotifi(newItem.id));
  };

  useEffect(() => {
    const janglingNotifies = async (): Promise<void> => {
      for (const newItem of notifis) {
        if (notifiList.find((item) => item.id === newItem.id)) continue;
        await addNotify(newItem);
        await emptyDelay(setTime);
      }
    };

    janglingNotifies();
  }, [notifis]);

  useEffect(() => {
    setTimeout(() => {
      isReady.current = true;
    }, rootAnimeMs[EAnimeTmplType.Page]);
  }, []);

  return { notifiList, closeNotifi };
};
