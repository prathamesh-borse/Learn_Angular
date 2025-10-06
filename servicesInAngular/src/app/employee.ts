import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees1.json"

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url) // In future if we have an web server then we can replace that here
                                  .pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message || "Server Error");
    
  }
}
