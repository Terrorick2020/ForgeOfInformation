declare module '@/*';
declare module '@libs/*';

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';
  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module 'redux-persist/integration/react' {
  import { ComponentType, ReactNode } from 'react';
  import { Persistor } from 'redux-persist';

  interface PersistGateProps {
    loading?: ReactNode;
    persistor: Persistor | null;
    children?: ReactNode;
  }

  export const PersistGate: ComponentType<PersistGateProps>;
}
