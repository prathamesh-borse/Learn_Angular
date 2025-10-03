import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee';
import { Employee } from '../employee.model';

@Component({
  selector: 'employee-details',
  imports: [FormsModule, CommonModule],
  template: `
      <h2>Employee Details</h2>
      <ul *ngFor="let employee of employees">
        <li>{{ employee.id}}. {{ employee.name }} - {{ employee.age }} </li>
      </ul>
  `,
  styles: []
})
export class EmployeeDetail {
  public employees: Employee[] = [];

  constructor(private _employeeService : EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
