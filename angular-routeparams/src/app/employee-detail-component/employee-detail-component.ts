import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Employee Detail</h2>
    <p *ngIf="employeeId">Employee ID: {{ employeeId }}</p>
    <p *ngIf="!employeeId">No employee id</p>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
        <button (click)="goToEmployees()">Back</button>
    </div>
  `,
  styles: `
  `
})
export class EmployeeDetailComponent implements OnInit {
  public employeeId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

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

  goPrevious() {
    if (this.employeeId !== null) {
      let previousId = this.employeeId - 1;
      this.router.navigate(['/employees', previousId]);
    }
  }

  goNext() {
    if (this.employeeId !== null) {
      let nextId = this.employeeId + 1;
      this.router.navigate(['/employees', nextId]);
    }
  }

  goToEmployees() {
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(['/employees', { id: selectedId }])
  }
}
