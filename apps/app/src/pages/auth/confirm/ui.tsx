import { AuthBasePanel, ConfirmPanel } from "@/widgets";
import { ABPCtxProvider } from '@/features';
import type { JSX } from "react";
import styles from "./ui.module.scss";

function AuthConfirmPage(): JSX.Element {
  return (
    <div className={styles["confirm-page"]}>
      <ABPCtxProvider>
        <AuthBasePanel headTitle="Подтверждение" btnTitle="Подтвердить">
          <ConfirmPanel />
        </AuthBasePanel>
      </ABPCtxProvider>
    </div>
  );
}

export default AuthConfirmPage;
