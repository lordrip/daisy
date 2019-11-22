import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { get as _get } from 'lodash';
import { ConfigModel } from '../models';
import { WidgetComponent, WidgetMap } from '../widgets';

@Component({
  selector: 'app-stage3',
  templateUrl: './stage3.component.html',
  styleUrls: ['./stage3.component.scss']
})
export class Stage3Component implements OnInit {

  @ViewChild('componentOutlet', { read: ViewContainerRef, static: true }) componentOutlet: ViewContainerRef;
  config: { [index: string]: unknown };
  configDef: ConfigModel;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.httpClient.get('assets/config.json')
      .subscribe((config: ConfigModel) => {
        this.configDef = config;
        this.config = this.getDefaultConfig(config);
        this.bootstrapConfigComponents(config);
      });
  }

  private getDefaultConfig(config: ConfigModel): { [index: string]: unknown } {
    return config.reduce(
      (accConfig, configItem) => ({
        ...accConfig,
        [configItem.configProp]: configItem.defaultValue,
      }),
      {},
    );
  }

  private bootstrapConfigComponents(config: ConfigModel): void {
    config.forEach((configItem) => {
      const componentClazz = _get(WidgetMap, configItem.widget, null);

      if (!componentClazz) {
        return;
      }

      const factory = this.componentFactoryResolver.resolveComponentFactory<WidgetComponent<unknown>>(componentClazz);
      const component = this.componentOutlet.createComponent(factory);
      component.instance.config = configItem;
      component.instance.valueChange.subscribe(this.updateConfig.bind(this));
    });
  }

  private updateConfig(config) {
    this.config = { ...this.config, ...config };
  }

}
