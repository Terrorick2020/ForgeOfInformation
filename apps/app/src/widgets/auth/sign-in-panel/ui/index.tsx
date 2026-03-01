import { FrontBlockUi} from "@/shared";
import { Button } from '@/features';
import type { JSX } from "react";
import styles from "./styles.module.scss";

function SignInPanel(): JSX.Element {
  return (
    <div className={styles['sign-in-panel']}>
      <FrontBlockUi addClass={styles["add-class"]}>
        <div className={styles["sign-in-panel__ctx"]}>
            <h4>Авторизация</h4>
            <div>

            </div>
            <Button title="Войти" />
        </div>
      </FrontBlockUi>
    </div>
  );
}

export default SignInPanel;
