import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee';

@Component({
  selector: 'employee-list',
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Employee List</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeList {
  public employees: Employee[] = [];
  public errorMsg: string = '';

  constructor(private _employeeService: EmployeeService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe({
        next: data => this.employees = data,
        error: err => {
          console.error('EmployeeList error:', err);
          this.errorMsg = err;
          this.cdRef.detectChanges();
        }
      });
  }
}
