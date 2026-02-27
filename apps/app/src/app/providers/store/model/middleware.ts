import type { Middleware } from "@reduxjs/toolkit";
import type { IRootStore } from "@/shared";

export const logMiddleware: Middleware<{}, IRootStore> =
  (storeAPI) => (next) => (action) => {
    console.group(`Action: ${(action as any).type}`);

    console.log("Prev state:", storeAPI.getState());
    console.log("Action:", action);

    const result = next(action);

    console.log("Next state:", storeAPI.getState());
    console.log("Next state:", storeAPI.getState());
    console.groupEnd();

    return result;
  };