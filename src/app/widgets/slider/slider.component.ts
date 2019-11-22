import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ConfigItem, ConfigValue } from 'src/app/models';
import { WidgetComponent } from '../widget-component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent extends WidgetComponent<number> {

  @Input() config: ConfigItem<number>;
  @Output() valueChange = new EventEmitter<ConfigValue<number>>();

  private value: ConfigValue<number>;

  getValue(): ConfigValue<number> {
    return this.value;
  }

  changeValue(event: MatRadioChange) {
    this.valueChange.emit({ [this.config.configProp]: event.value });
  }

}
