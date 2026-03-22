import { LogoUi, InnerBlockUi, EIBUiBoxType } from "@/shared";
import { ToggleTheme, Button } from "@/features";
import { useSettings } from "../model";
import type { JSX } from "react";
import styles from "./styles.module.scss";
import SunSvgr from "./sun.svg?react";
import WaveSvgr from "./wave.svg?react";

function PreviewHeader(): JSX.Element {
  const handleNav = useSettings();

  return (
    <header className={styles["preview-header"]}>
      <section className={styles["preview-header__prev"]}>
        <LogoUi />
        <ToggleTheme addClass={styles["add-tgth-class"]} />
      </section>
      <section className={styles["preview-header__ctx"]}>
        <article className={styles["article"]}>
          <h1 className={styles["headline"]}>Контроль над информацией</h1>
          <h5 className={styles["sub-headline"]}>
            Полный контроль над данными — от сбора до анализа и принятия
            решений. Объединяйте информацию из разных источников: внутренних
            систем, внешних баз и облачных сервисов, формируя единую
            структурированную картину. Отслеживайте изменения в реальном
            времени, выявляйте аномалии и закономерности.
          </h5>
          <Button addClass={styles["add-btn-class"]} title="Вперёд" onClick={handleNav}/>
        </article>
        <figure className={styles["figure"]}>
          <div className={styles["figure__ctx"]}>
            <InnerBlockUi boxType={EIBUiBoxType.Local}>
              <ul className={styles["points-list"]}>
                <li className={styles["points-list__item"]} />
                <li className={styles["points-list__item"]} />
                <li className={styles["points-list__item"]} />
              </ul>
            </InnerBlockUi>
            <div className={styles["add-block"]}>
              <InnerBlockUi boxType={EIBUiBoxType.Glob}>
                <div className={styles["add-block__box"]}>
                  <div className={styles["head"]} />
                  <div className={styles["body"]}>
                    <WaveSvgr className={styles["wave-svgr"]} />
                  </div>
                </div>
              </InnerBlockUi>
            </div>
            <SunSvgr className={styles["sun-svgr"]} />
          </div>
        </figure>
      </section>
    </header>
  );
}

export default PreviewHeader;
