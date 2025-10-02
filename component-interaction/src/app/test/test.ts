import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
    <h2>
      {{ "Hello, " +  parentData }}
    </h2>

    <button (click)="fireEvent()">
      Send Event
    </button>
    `,
})
export class Test {

  // here we are receiving the data from the parent component using @Input decorator
  @Input() public parentData!: string;

  // @Output decorator we have used because we are sending data from child component to parent component
  @Output() public childEvent = new EventEmitter<string>();

  public fireEvent() {
    this.childEvent.emit("Hey, Prathamesh! This event is generated from child Component.");
  }
}
