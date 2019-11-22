export type ConfigModel = ConfigItem<unknown>[];

export interface ConfigItem<T> {
  configProp: string;
  widget: string;
  defaultValue: T;
  description: string;
  options: ConfigOptions<T>[] | ConfigValue<T>;
}

export interface ConfigOptions<T> {
  description: string;
  value: T;
}

export interface ConfigValue<T> {
  [index: string]: T;
}
