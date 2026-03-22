import { ESortDirection } from "@libs/config";
import { createContext, useState, type ChangeEvent } from "react";
import type { TTmplHook, TTmplSetFn } from "@/shared";

interface IHomeStorageCtx {
  searchValue: string;
  sortDir: ESortDirection;
  onSearchChange: TTmplSetFn<[event: ChangeEvent<HTMLInputElement>]>;
  toggleSortDir: TTmplSetFn;
}

export const HomeStorageCtx = createContext<IHomeStorageCtx>({
  searchValue: "",
  sortDir: ESortDirection.Direct,
  onSearchChange: () => {},
  toggleSortDir: () => {},
});

export const useCtx: TTmplHook<[], IHomeStorageCtx> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortDir, setSortDir] = useState<ESortDirection>(ESortDirection.Direct);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const toggleSortDir = (): void => {
    setSortDir((prev) =>
      prev === ESortDirection.Direct
        ? ESortDirection.Reverse
        : ESortDirection.Direct,
    );
  };

  return { searchValue, sortDir, onSearchChange, toggleSortDir };
};
