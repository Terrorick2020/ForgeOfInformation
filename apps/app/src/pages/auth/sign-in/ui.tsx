import { SignInPanel, AuthBasePanel } from "@/widgets";
import { ABPCtxProvider } from '@/features';
import type { JSX } from "react";
import styles from "./ui.module.scss";

function AuthSignInPage(): JSX.Element {
  return (
    <div className={styles["sign-in-page"]}>
      <ABPCtxProvider>
        <AuthBasePanel headTitle="Авторизация" btnTitle="Войти">
          <SignInPanel />
        </AuthBasePanel>
      </ABPCtxProvider>
    </div>
  );
}

export default AuthSignInPage;
