import type { JSX } from "react";
import type { ITmplUiProps } from '@/shared';
import styles from "./styles.module.scss";

interface IButtonProps {
  title: string;
  icon?: JSX.Element;
  addClass?: string;
}

function Button({ title, icon, addClass = "" }: IButtonProps): JSX.Element {
  return (
    <div className={`${styles["button"]} ${addClass}`}>
      <button className={styles["button__ctx"]}>
        <p className={styles["btn-txt"]}>{title}</p>
        {icon && <span className={styles["btn-icon"]}>
                { icon }
            </span>
        }
      </button>
    </div>
  );
}

export default Button;
