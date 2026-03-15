import settingsReducer from "./settings/combiner";
import systemReducer from "./system/combiner";

export * from "./settings/combiner";
export * from "./settings/types";

export * from "./system/combiner";
export * from "./system/types";

export * from "./reselect";
export * from "./types";

export { settingsReducer, systemReducer };
