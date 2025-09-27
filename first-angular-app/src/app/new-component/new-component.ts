import { Component } from '@angular/core';

@Component({
  selector: 'new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css'
})
export class NewComponent {
  messgae = 'This is new component';
}
