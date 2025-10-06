import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './test/test';
import { FormsModule } from '@angular/forms';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { EmployeeService } from './employee';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeList, FormsModule, EmployeeDetail, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [EmployeeService]
})
export class App {
  protected readonly title = signal('servicesInAngular');
}
