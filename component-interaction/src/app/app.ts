import { Component, signal } from '@angular/core';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  imports: [Test],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('component-interaction');
  public name = "Prathamesh"; // name string is being send to the test component
  message: string =  ""; // here we are receiving the event data from the test component
}
