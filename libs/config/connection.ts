export enum EResponseType {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Error = "error",
}

// Просто пример для ответов, там надо получше сделать, но с этой структурой
// Идёт статус код - описание общее, а сообщение на беке пропиывать надо
// Это внутренние статус коды, а не в самом ответе
export const MAP_STATUS_CODES = {
  [EResponseType.Info]: {
    100: "Информация о чатах",
  },
  [EResponseType.Success]: {
    200: "Успешная проверка",
    201: "Успешная применение",
  },
  [EResponseType.Warning]: {
    300: "Предупрежение проблем",
    301: "Предупреждение пользователя",
  },
  [EResponseType.Error]: {
    403: "Ошибка авторизации",
    404: "Ошибка поиска"
  },
} as const;

export type TRespStatusCode =
  | keyof typeof MAP_STATUS_CODES[EResponseType.Info]
  | keyof typeof MAP_STATUS_CODES[EResponseType.Success]
  | keyof typeof MAP_STATUS_CODES[EResponseType.Warning]
  | keyof typeof MAP_STATUS_CODES[EResponseType.Error];

export interface IResponseData<T extends any = undefined> {
  data?: T;
  status: EResponseType;
  statusCode: TRespStatusCode;
  message: string;
}

export type TResponseResult<T extends any = any> = IResponseData<T> | undefined; 
