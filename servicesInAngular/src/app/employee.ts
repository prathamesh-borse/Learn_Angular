import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return [
      { "id": 1, "name": "Prathamesh", "age": 25 },
      { "id": 2, "name": "Nilesh", "age": 26 },
      { "id": 3, "name": "Ram", "age": 25 },
      { "id": 4, "name": "Mayur", "age": 28 }
    ];
  }
}
