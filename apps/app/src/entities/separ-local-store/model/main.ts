import {
  getStoreValue,
  setStoreValue,
  removeStoreValue,
  clearStore,
} from "./tools";

import { separLocStorePref, separLocStoreSheme } from "./constants";
import { getIsArkValid } from "@/shared";
import { ESeparLocalStore, type ISeparLocalStore } from "./types";

export class SeparLocalStore<
  T extends Partial<ISeparLocalStore> = ISeparLocalStore,
> {
  private localStore: Partial<T> = {};

  constructor(initial?: ESeparLocalStore[]) {
    if (!initial) return;

    for (const enumKey of initial) {
      if (!Object.values(enumKey)) continue;

      const storeKey = enumKey.replace(
        separLocStorePref,
        "",
      ) as keyof ISeparLocalStore;

      const result = getStoreValue(storeKey);
      this.localStore[storeKey as keyof T] = result as T[keyof T];
    }

    const validator = getIsArkValid<T>(separLocStoreSheme);
    if (!validator(this.localStore)) {
      this.localStore = {};
      console.warn("Получены невалидные данные из localStore");
    }
  }

  getValues(): T {
    return this.localStore as T;
  }

  setValue<K extends keyof T & keyof ISeparLocalStore>(
    enumKey: ESeparLocalStore,
    value: T[K],
  ): void {
    const key = enumKey.replace(separLocStorePref, "") as K;

    const schema = { [key]: separLocStoreSheme.get(key) };
    const validator = getIsArkValid<typeof schema>(schema);

    if (!validator({ [key]: value })) {
      console.warn(`Недопустимое значение для ключа ${key}:`, value);
      return;
    }

    this.localStore[key] = value as T[K];
    setStoreValue(key, value as T[K]);
  }

  removeValue(enumKey: ESeparLocalStore): void {
    const key = enumKey.replace(separLocStorePref, "") as keyof T;
    delete this.localStore[key];
    removeStoreValue(enumKey);
  }

  clearStore(): void {
    this.localStore = {};
    clearStore();
  }
}
