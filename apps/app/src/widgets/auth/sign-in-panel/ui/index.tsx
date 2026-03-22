import { useSettings } from "../model";
import { FormControl } from "@/features";
import { CheckboxUi } from "@/shared";
import type { JSX } from "react";
import styles from "./styles.module.scss";

function SignInPanel(): JSX.Element {
  const {
    showLogin,
    checked,
    errValue,
    onLoginChange,
    onPswdChange,
    onCheckedChange,
  } = useSettings();

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
      <div className={styles["bottom-box"]}>
        <FormControl
          label="Секретный код *"
          placeholder="Пароль"
          errTxt="Обязательное поле"
          isErr={errValue.pswd}
          onChange={onPswdChange}
        />
        <CheckboxUi
          text="Запомнить меня"
          checked={checked}
          onChange={onCheckedChange}
        />
      </div>
    </>
  );
}

export default SignInPanel;
