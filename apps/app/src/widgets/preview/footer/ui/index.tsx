import { Link } from 'react-router-dom';
import type { JSX } from "react";
import styles from "./styles.module.scss";

function PreviewFooter(): JSX.Element {
  return (
    <footer className={styles["preview-footer"]}>
      <p>© 2026 Анонимная команда</p>
      <Link to="">Политика конфиденциальности</Link>
      <Link to="">Правила использования</Link>
    </footer>
  );
}

export default PreviewFooter;
