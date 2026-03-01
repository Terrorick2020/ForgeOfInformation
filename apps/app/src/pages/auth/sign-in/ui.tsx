import { SignInPanel } from "@/widgets";
import { ScrollBlock } from "@/features";
import { InnerBlockUi, EIBUiInnerType } from "@/shared";
import type { JSX } from "react";
import styles from "./ui.module.scss";

function AuthSignInPage(): JSX.Element {
  return (
    <div className={styles["sign-in-page"]}>
      <InnerBlockUi innerType={EIBUiInnerType.Inline}>
        <ScrollBlock addClass={styles["add-scrl-class"]}>
          <SignInPanel />
        </ScrollBlock>
      </InnerBlockUi>
    </div>
  );
}

export default AuthSignInPage;
