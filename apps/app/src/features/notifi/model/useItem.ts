import { useEffect } from 'react';
import { EResponseType } from "@libs/config";
import type { TNISvgrFromType, TUseItem } from ".";
import InfoSvgr from "@/shared/assets/icons/info.svg?react";
import SuccessSvgr from "@/shared/assets/icons/success.svg?react";
import WarningSvgr from "@/shared/assets/icons/warning.svg?react";
import ErrorSvgr from "@/shared/assets/icons/error.svg?react";

const NISvgrFromType: TNISvgrFromType = {
  [EResponseType.Info]: InfoSvgr,
  [EResponseType.Success]: SuccessSvgr,
  [EResponseType.Warning]: WarningSvgr,
  [EResponseType.Error]: ErrorSvgr,
};

export const useItem: TUseItem = (type, closeMs, closeNotifi) => {
  const Icon = NISvgrFromType[type];

  useEffect(() => {
    setTimeout(() => {
      closeNotifi();
    }, closeMs)
  }, [])
  
  return { Icon };
};
