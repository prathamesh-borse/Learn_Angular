import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Employee Detail</h2>
    <p *ngIf="employeeId">Employee ID: {{ employeeId }}</p>
    <p *ngIf="!employeeId">No employee id</p>
    <a routerLink="/">Back</a>
  `,
  styles: ``
})
export class EmployeeDetailComponent implements OnInit{
  employeeId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('id');
        this.employeeId = id ? + id : null;  
    });
    
    /*
      route.snapshot → reads params once.
      route.paramMap.subscribe() → listens for changes.
      Use snapshot only if you know the route won’t change while the component is alive.
    */

  }
}
