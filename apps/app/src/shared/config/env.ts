export enum EAppMode {
  Dev = 'dev',
  Analyze = 'analyze',
  Test = 'test',
  Prod = 'prod',
}

export const APP_MODE: EAppMode = import.meta.env.VITE_APP_MODE || EAppMode.Dev;
export const APP_PREF: string = import.meta.env.VITE_APP_PREF || '';

export const API_PATH: string = import.meta.env.VITE_API_PATH || '';
export const API_PREF: string = import.meta.env.VITE_API_PREF || '';

if (!Object.values(EAppMode).includes(APP_MODE)) {
  throw new Error(`APP_MODE имеет недопустимое значение: ${APP_MODE}`);
}

if(!API_PATH || !API_PREF) {
  throw new Error('Отсутсвуют какие-то переменные окружения');
}
