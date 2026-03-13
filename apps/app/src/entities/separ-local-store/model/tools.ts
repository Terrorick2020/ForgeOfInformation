import { separLocStorePref } from "./constants";
import { ESeparLocalStore, type ISeparLocalStore } from "./types";

export function getStoreValue<K extends keyof ISeparLocalStore>(
  key: K,
): ISeparLocalStore[K] {
  const storeKey = `${separLocStorePref}${key}` as const;

  try {
    const stored = localStorage.getItem(storeKey);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (err) {
    console.error(
      `Возникла ошибка при получении данных из localStore по ключу - ${storeKey}:`,
      err,
    );
    return null;
  }
}

export function setStoreValue<K extends keyof ISeparLocalStore>(
  key: K,
  value: ISeparLocalStore[K] | null,
): void {
  const storeKey = `${separLocStorePref}${key}` as const;

  try {
    if (value === null || value === undefined) {
      localStorage.removeItem(storeKey);
      return;
    }

    const serialized = JSON.stringify(value);
    localStorage.setItem(storeKey, serialized);
  } catch (err) {
    console.error(
      `Ошибка при сохранении localStorage по ключу - ${storeKey}:`,
      err,
    );
  }
}

export function removeStoreValue(key: ESeparLocalStore): void {
  try {
    localStorage.removeItem(key);
    console.log(`Данные из localStorage по ключу - ${key}: удалены`);
  } catch (err) {
    console.error(`Ошибка при удалении localStorage по ключу - ${key}:`, err);
  }
}

export function clearStore(): void {
  try {
    Object.keys(ESeparLocalStore).forEach((key) => {
      if (key.startsWith(separLocStorePref)) {
        localStorage.removeItem(key);
      }
    });
    console.log("Все данные separ локального стора очищены");
  } catch (err) {
    console.error("Ошибка при полной очистке separ локального стора:", err);
  }
}
