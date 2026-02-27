import { EProfileRoles } from '@libs/config';
import { memo, type ReactNode } from 'react';

interface IPermGuardProps {
    permList: EProfileRoles[];
    realPerm: EProfileRoles;
    sucRes: ReactNode
    errRes?: ReactNode
}

function PermGuard({
    permList,
    realPerm,
    sucRes,
    errRes=<></>,
}: IPermGuardProps): ReactNode {
    if(permList.includes(realPerm))
        return sucRes;

    return errRes;
}

export default memo(PermGuard);