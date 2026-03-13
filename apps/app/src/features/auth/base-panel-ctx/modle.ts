import {
  useState,
  createContext,
  useRef,
  type MouseEvent,
  type RefObject,
} from "react";

import type { TTmplSetFn, TTmplHook } from "@/shared";

interface IAuthBasePanelCtx {
  isLoad: boolean;
  handleClick: RefObject<TOnHandleClick>;
  onHandleClick: TTmplSetFn<[event: MouseEvent<HTMLButtonElement>], true>;
}

type TOnHandleClick =
  | TTmplSetFn<[event: MouseEvent<HTMLButtonElement>], true>
  | undefined;

export const AuthBasePanelCtx = createContext<IAuthBasePanelCtx>({
  isLoad: false,
  handleClick: { current: undefined },
  onHandleClick: async () => {},
});

export const useCtx: TTmplHook<[], IAuthBasePanelCtx> = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const handleClick = useRef<TOnHandleClick>(undefined);

  const onHandleClick = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    setIsLoad(true);
    await handleClick.current?.(event);
    setIsLoad(false);
  };

  return { isLoad, handleClick, onHandleClick };
};
