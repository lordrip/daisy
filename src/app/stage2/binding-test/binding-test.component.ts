import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.scss']
})
export class BindingTestComponent {

  @Input() content: string;
  @Output() clickOutput = new EventEmitter<boolean>();

  doClick(): void {
    this.clickOutput.emit(true);
  }


}
