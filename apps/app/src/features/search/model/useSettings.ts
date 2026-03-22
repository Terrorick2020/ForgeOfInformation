import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent,
} from "react";

import type { TUseSettings } from ".";

export const useSettings: TUseSettings = (value, onChange) => {
  const keyId = `search-${useId()}`;
  const inptRef = useRef<HTMLInputElement | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsEmpty(!event.target.value);
    onChange?.(event);
  };

  const handleClear = (_event: MouseEvent<HTMLButtonElement>): void => {
    if (!inptRef.current) return;

    const fakeEvent = {
      target: {
        value: "",
        name: "",
      },
      currentTarget: {
        value: "",
        name: "",
      },
    } as ChangeEvent<HTMLInputElement>;

    onHandleChange(fakeEvent);

    if (value) return;

    inptRef.current.value = "";
  };

  return { keyId, inptRef, isEmpty, onHandleChange, handleClear };
};
