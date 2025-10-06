import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Product Detail</h2>
    <p *ngIf="productId">Product ID: {{ productId }}</p>
    <p *ngIf="!productId">No product id</p>
    <a routerLink="/">Back</a>
  `,
  styles: ``
})
export class EmployeeDetailComponent implements OnInit{
  productId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id ? + id : null;  
  }

}
