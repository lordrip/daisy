import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BindingTestComponent } from './binding-test/binding-test.component';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.scss']
})
export class Stage2Component implements OnInit, OnDestroy {

  @ViewChild('componentOutlet', { read: ViewContainerRef, static: true }) componentOutlet: ViewContainerRef;
  collectedData: boolean[] = [];

  private component: ComponentRef<BindingTestComponent>;
  private readonly destroySub = new Subject<void>();

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(BindingTestComponent);
    this.component = this.componentOutlet.createComponent(factory);

    this.component.instance.clickOutput
      .pipe(takeUntil(this.destroySub))
      .subscribe(this.collectData.bind(this));
  }

  ngOnDestroy(): void {
    this.destroySub.next();
  }

  updateInput(): void {
    this.component.instance.content = new Date().getUTCMilliseconds().toString();
  }

  private collectData(value: boolean): void {
    this.collectedData.push(value);
  }
}
