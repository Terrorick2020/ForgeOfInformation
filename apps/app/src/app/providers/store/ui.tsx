import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './model';
import type { JSX } from "react";
import type { ITmplCompProps } from "@/shared";

function Store({ children }: ITmplCompProps): JSX.Element {
  return (
    <Provider store={ store }>
      <PersistGate
        loading={ null }
        persistor={ persistor }
    >
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Store;
