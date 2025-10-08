import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Employee List</h2>
    <ul class="menu">
        <li (click)="onSelect(employee)" *ngFor="let employee of employees" [class.selected]="isSelected(employee)">
            <a [routerLink]="['/employees', employee.id]">{{ employee.name }}</a>
        </li>
    </ul>
  `,
  styles: [`
    .menu { display: flex; flex-direction:column; gap: 20px; margin-bottom: 10px; }
    .menu a { text-decoration: none; padding: 8px 15px; border-radius: 5px; background-color: #007bff; color: white; transition: background-color 0.3s; }
    .menu a:hover { background-color: #0056b3; cursor: pointer; }
    .menu a.active { background-color: #0056b3; }

    li.selected:hover {
      background-color: #BBD8DC;
      color: white;
    }

    li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: 15px 10px;
      height: 1.6em;
      border-radius: 4px;
      width: 150px;
  }

    li.selected {
      background-color: #CFD8DC;
      color: white;
    }
  `]
})
export class EmployeeListComponent {
  public selectedId: number | null = null;

  employees = [
    { id: 1, name: "Prathamesh Borse" },
    { id: 2, name: "Bhavesh Borse" },
    { id: 3, name: "Sanjay Borse" },
    { id: 4, name: "Sarala Borse" }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.selectedId = id ? + id : null;
    });
  }

  onSelect(employee: Employee) {
    this.router.navigate(['/employees', employee.id]);
  }

  isSelected(employee: Employee) {
    return employee.id === this.selectedId;
  }

}
