import { useId } from "react";

export const useSettings = () => {
  const keyId = useId();

  return {
    keyId: `form-control-${keyId}`,
  };
};
