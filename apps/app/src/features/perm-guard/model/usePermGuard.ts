import { useSelector } from 'react-redux';
import { selectSett } from '@/shared';
import type { TUsePermGuard } from '.';

export const usePermGuard: TUsePermGuard = () => {
  const { role } = useSelector(selectSett);
  return { role };
}
