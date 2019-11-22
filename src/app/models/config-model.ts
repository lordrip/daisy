export type ConfigModel = ConfigItem<unknown>[];

export interface ConfigItem<T> {
  configProp: string;
  widget: string;
  defaultValue: T;
  description: string;
  options: ConfigOptions<T>[] | ConfigIndividualOptions<T>;
}

export interface ConfigOptions<T> {
  description: string;
  value: T;
}

export interface ConfigIndividualOptions<T> {
  min: number;
  max: number;
  step: number;
  placeholder: string;
  defaultValue: string;
}

export interface ConfigValue<T> {
  [index: string]: T;
}
