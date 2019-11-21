import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Stage1Component } from './stage1.component';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'stage1',
    component: Stage1Component,
  }
];

@NgModule({
  declarations: [
    Stage1Component,
    TestComponent,
  ],
  entryComponents: [
    TestComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class Stage1Module { }
