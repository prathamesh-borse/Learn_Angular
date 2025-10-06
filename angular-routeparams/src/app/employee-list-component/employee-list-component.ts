import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Employee List</h2>
    <ul class="menu">
        <li *ngFor="let employee of employees">
            <a [routerLink]="['/employee', employee.id]">{{ employee.name }}</a>
        </li>
    </ul>
  `,
  styles: [`
    .menu { display: flex; flex-direction:column; gap: 20px; margin-bottom: 10px; }
    .menu a { text-decoration: none; padding: 8px 15px; border-radius: 5px; background-color: #007bff; color: white; transition: background-color 0.3s; }
    .menu a:hover { background-color: #0056b3; cursor: pointer; }
    .menu a.active { background-color: #0056b3; }
  `]
})
export class EmployeeListComponent {
  employees = [
    { id: 1, name: "Prathamesh Borse" },
    { id: 2, name: "Bhavesh Borse" },
    { id: 3, name: "Sanjay Borse" },
    { id: 4, name: "Sarala Borse" }
  ];

  constructor(private route: Router) {}

}
