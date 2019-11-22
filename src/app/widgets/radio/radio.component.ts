import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ConfigItem, ConfigValue } from 'src/app/models';
import { WidgetComponent } from '../widget-component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends WidgetComponent<boolean> {

  @Input() config: ConfigItem<boolean>;
  @Output() valueChange = new EventEmitter<ConfigValue<boolean>>();

  private value: ConfigValue<boolean>;

  getValue(): ConfigValue<boolean> {
    return this.value;
  }

  changeValue(event: MatRadioChange) {
    this.valueChange.emit({ [this.config.configProp]: event.value });
  }

}
