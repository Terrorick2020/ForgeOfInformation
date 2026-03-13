import { type } from "arktype";

type Validator<T> = (data: unknown) => data is T;

export function getIsArkValid<T>(schema: any): Validator<T> {
  const t = type(schema);

  return (data: unknown): data is T => {
    const result = t(data);
    return result instanceof Error ? false : true;
  };
}
