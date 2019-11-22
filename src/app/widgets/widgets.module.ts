import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list';
import { RadioComponent } from './radio';
import { SliderComponent } from './slider';

@NgModule({
  declarations: [
    ListComponent,
    RadioComponent,
    SliderComponent,
  ],
  entryComponents: [
    ListComponent,
    RadioComponent,
    SliderComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class WidgetsModule { }
