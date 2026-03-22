interface IKeyCombs {
  default: TKeysCombItem;
  home: TKeysCombItem;
}

export interface IKeysCombItemInner {
  descreeption: string;
  required: string[];
  additional: string[];
}

export type TKeysCombItem = {
  purpose: string;
  commands: Record<string, IKeysCombItemInner>;
};

export const keyCombs: IKeyCombs = {
  default: {
    purpose: "Общее",
    commands: {
      nextAction: {
        descreeption: "Переход к следующему действию формы",
        required: ["Enter"],
        additional: [],
      },
      exitFromSys: {
        descreeption: "Выход из системы",
        required: ["Ctrl", "Alt"],
        additional: ["Q", "Й"],
      },
    },
  },
  home: {
    purpose: "Платформа",
    commands: {
      toStorage: {
        descreeption: "Переход к хранилищу",
        required: ["Ctrl"],
        additional: ["S", "Ы"],
      },
    },
  },
};