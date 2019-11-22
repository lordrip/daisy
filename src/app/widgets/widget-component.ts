import { Subject } from 'rxjs';
import { ConfigItem, ConfigValue } from '../models';

export abstract class WidgetComponent<T> {
  config: ConfigItem<T>;
  valueChange: Subject<ConfigValue<T>>;

  abstract getValue(): ConfigValue<T>;
}
