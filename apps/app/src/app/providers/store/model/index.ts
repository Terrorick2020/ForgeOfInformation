import {
  settingsReducer,
  systemReducer,
  ETypeDispatch,
  type TRootReducer,
} from "@/shared";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { logMiddleware } from "./middleware";
import storage from "redux-persist/lib/storage";

const appReducer: TRootReducer = combineReducers({
  settings: settingsReducer,
  system: systemReducer,
});

const rootReducer: TRootReducer = (state, action) => {
  if (action.type === ETypeDispatch.Reset) state = undefined;
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logMiddleware),
});
export const persistor = persistStore(store);
