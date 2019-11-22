import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WidgetComponent } from '../widget-component';
import { ConfigValue, ConfigItem } from 'src/app/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends WidgetComponent<string[]> implements OnInit {

  @Input() config: ConfigItem<string[]>;
  @Output() valueChange = new EventEmitter<ConfigValue<string[]>>();
  inputValue: string;

  private value: ConfigValue<string[]>;

  ngOnInit(): void {
    if (Array.isArray(this.config.options)) {
      return;
    }

    this.inputValue = this.config.options.defaultValue;
    this.value = { [this.config.configProp]: this.config.defaultValue };
  }

  getValue(): ConfigValue<string[]> {
    return this.value;
  }

  addValue(value: string): void {
    this.value[this.config.configProp].push(value);
  }

}
