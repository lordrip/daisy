import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListComponent, RadioComponent, SliderComponent } from '../widgets';
import { Stage3Component } from './stage3.component';

const routes: Routes = [
  {
    path: 'stage3',
    component: Stage3Component,
  }
];

@NgModule({
  declarations: [
    Stage3Component,
    RadioComponent,
    SliderComponent,
    ListComponent,
  ],
  entryComponents: [
    RadioComponent,
    SliderComponent,
    ListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class Stage3Module { }
