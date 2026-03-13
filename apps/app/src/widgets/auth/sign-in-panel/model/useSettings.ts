import {
  useEffect,
  useContext,
  useRef,
  useState,
  type MouseEvent,
  type ChangeEvent,
} from "react";

import {
  SeparLocalStore,
  ESeparLocalStore,
  type ISeparLocalStore,
} from "@/entities";

import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/shared";
import { AuthBasePanelCtx } from "@/features";
import type { TUseSettings, ILogPswdValue } from ".";

export const useSettings: TUseSettings = () => {
  const context = useContext(AuthBasePanelCtx);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState<string>("");
  const logPswd = useRef<ILogPswdValue<string>>({
    login: "",
    pswd: "",
  });
  const [errValue, setErrValue] = useState<ILogPswdValue<boolean>>({
    login: false,
    pswd: false,
  });

  const syncLoginValues = (newValue: string): void => {
    logPswd.current.login = newValue;
    setShowLogin(newValue);
  };

  const onLoginChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    syncLoginValues(newValue);
    setErrValue((prev) => ({ ...prev, login: !newValue }));
  };

  const onPswdChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    logPswd.current.pswd = newValue;
    setErrValue((prev) => ({ ...prev, pswd: !newValue }));
  };

  const onHandleClick = async (_event: MouseEvent<HTMLButtonElement>) => {
    setErrValue({
      login: !logPswd.current.login,
      pswd: !logPswd.current.pswd,
    });
    if (logPswd.current.login && logPswd.current.pswd) {
      const sepStore = new SeparLocalStore<Pick<ISeparLocalStore, "login">>([
        ESeparLocalStore.Login,
      ]);
      sepStore.setValue<"login">(ESeparLocalStore.Login, logPswd.current.login);
      navigate(`${appRoutes.home.glob}/${appRoutes.home.local.chat}`);
    }
  };

  useEffect(() => {
    const sepStore = new SeparLocalStore<Pick<ISeparLocalStore, "login">>([
      ESeparLocalStore.Login,
    ]);
    const newSyncValue = sepStore.getValues().login || ""
    syncLoginValues(newSyncValue);

    context.handleClick.current = onHandleClick;

    return () => {
      context.handleClick.current = undefined;
    };
  }, []);

  return { showLogin, errValue, onLoginChange, onPswdChange };
};
