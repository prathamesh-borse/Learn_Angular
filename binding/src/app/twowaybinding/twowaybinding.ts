import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-twowaybinding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
})
export class Twowaybinding {
  public name = "Prathamesh";

}
