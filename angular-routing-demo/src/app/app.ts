import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Angular 20 Routing Demo</h1>
    <nav class="menu">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .menu { display: flex; gap: 15px; margin-bottom: 10px; }
    .menu a { text-decoration: none; padding: 8px 15px; border-radius: 5px; background-color: #007bff; color: white; transition: background-color 0.3s; }
    .menu a:hover { background-color: #0056b3; cursor: pointer; }
    .menu a.active { background-color: #0056b3; }
  `]
})
export class App { }
