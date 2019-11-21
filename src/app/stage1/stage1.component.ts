import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.scss']
})
export class Stage1Component {

  @ViewChild('componentOutlet', { read: ViewContainerRef, static: true }) componentOutlet: ViewContainerRef;

  constructor(
    private readonly componentFactoryResover: ComponentFactoryResolver,
  ) { }

  addNewComponent(): void {
    const factory = this.componentFactoryResover.resolveComponentFactory(TestComponent);
    this.componentOutlet.createComponent(factory);
  }

}
