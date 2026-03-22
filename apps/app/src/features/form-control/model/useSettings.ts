import { useId } from "react";
import type { TUseSettings } from '.';

export const useSettings: TUseSettings = () => {
  const keyId = useId();

  return {
    keyId: `form-control-${keyId}`,
  };
};
