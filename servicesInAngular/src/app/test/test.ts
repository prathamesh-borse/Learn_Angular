import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee';

@Component({
  selector: 'employee-list',
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeList {
  public employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
