import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list-component/employee-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, EmployeeListComponent],
  template: `
          <h1>Angular 20 Route Params Demo</h1>
          <nav class="menu">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
          </nav>
          <hr>
          <app-employee-list-component></app-employee-list-component>
          <router-outlet></router-outlet>
      
    `,  
  styles: [`
    .menu { display: flex; gap: 15px; margin-bottom: 10px; }
    .menu a { text-decoration: none; padding: 8px 15px; border-radius: 5px; background-color: #007bff; color: white; transition: background-color 0.3s; }
    .menu a:hover { background-color: #0056b3; cursor: pointer; }
    .menu a.active { background-color: #0056b3; }
  `]
})
export class App {
  protected readonly title = signal('angular-routeparams');
}
