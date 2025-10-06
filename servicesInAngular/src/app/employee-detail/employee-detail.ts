import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee';
import { Employee } from '../employee.model';

@Component({
  selector: 'employee-details',
  imports: [FormsModule, CommonModule],
  template: `
      <h2>Employee Details</h2>
      <h3>{{ errorMsg }}</h3>
      <ul *ngFor="let employee of employees">
        <li>{{ employee.id}}. {{ employee.name }} - {{ employee.age }} </li>
      </ul>
  `,
  styles: []
})
export class EmployeeDetail {
  public employees: Employee[] = [];

  public errorMsg: string = '';

  constructor(private _employeeService: EmployeeService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data,
          this.cdRef.detectChanges();
      },
        err => {
          this.errorMsg = err,
            this.cdRef.detectChanges();
        }
      );
  }
}
