type PartialStringified<T> = { [KEY in keyof T]: T[KEY] | undefined | null | string };
