import { usePermGuard, type IPermGuardProps } from "./model";
import { memo, type ReactNode } from "react";

function PermGuard({
  permList,
  sucRes,
  errRes = <></>,
}: IPermGuardProps): ReactNode {
  const { role } = usePermGuard();
  if (permList.includes(role)) return sucRes;
  return errRes;
}

export default memo(PermGuard);
