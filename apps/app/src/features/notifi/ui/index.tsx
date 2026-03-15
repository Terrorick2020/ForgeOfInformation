import {
  ENotifiHorPosit,
  ENotifiVerPosit,
  useSettings,
  useNotifi,
  delTime,
} from "../model";

import { AnimatePresence } from "framer-motion";
import type { JSX } from "react";
import type { INotifiProps } from "./types";
import NotifiItem from "./Item";
import styles from "./index.module.scss";

function Notifi({
  children,
  horPosit = ENotifiHorPosit.Rignt,
  verPosit = ENotifiVerPosit.Botton,
}: INotifiProps): JSX.Element {
  const { notifiKey, orientStyles } = useSettings(horPosit, verPosit);
  const { notifiList, closeNotifi } = useNotifi();

  return (
    <div className={styles["notifi"]}>
      <div className={styles["notifi__body"]}>{children}</div>
      <div
        className={`${styles["notifi__ctx"]} ${styles[verPosit]}`}
        style={orientStyles}
      >
        <AnimatePresence>
          {notifiList.map((item, index) => (
            <NotifiItem
              key={`${notifiKey}-${item.id}`}
              type={item.type}
              title={item.title}
              text={item.text}
              closeMs={delTime + (50 * index)}
              closeNotifi={closeNotifi(item.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Notifi;
