import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../widgets';
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
  ],
  imports: [
    SharedModule,
    WidgetsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class Stage3Module { }
