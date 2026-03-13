import { useSettings } from "./model";
import { FormControl } from "@/features";
import type { JSX } from "react";

function SignInPanel(): JSX.Element {
  const { showLogin, errValue, onLoginChange, onPswdChange } = useSettings();

  return (
    <>
      <FormControl
        label="Имя пользователя *"
        placeholder="Логин"
        errTxt="Обязательное поле"
        isErr={errValue.login}
        value={showLogin}
        onChange={onLoginChange}
      />
      <FormControl
        label="Секретный код *"
        placeholder="Пароль"
        errTxt="Обязательное поле"
        isErr={errValue.pswd}
        onChange={onPswdChange}
      />
    </>
  );
}

export default SignInPanel;
