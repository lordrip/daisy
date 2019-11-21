import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BindingTestComponent } from './binding-test/binding-test.component';
import { Stage2Component } from './stage2.component';

const routes: Routes = [
  {
    path: 'stage2',
    component: Stage2Component,
  }
];

@NgModule({
  declarations: [
    Stage2Component,
    BindingTestComponent,
  ],
  entryComponents: [
    BindingTestComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class Stage2Module { }
