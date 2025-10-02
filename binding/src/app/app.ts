import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component/test-component';
import { FormsModule } from '@angular/forms';
import { Twowaybinding } from './twowaybinding/twowaybinding';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Twowaybinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('From App Component');
}
