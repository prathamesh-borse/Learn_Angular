import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2 *ngIf="displayName; else elseBlock">Prathamesh Borse</h2>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>


    <div *ngIf="displayName; then thenBlock; else elseBlock">
    </div>

    <ng-template #elseBlock>
      <h2>Else Block will be displayed, if displayName is false</h2>
    </ng-template>

    <ng-template #thenBlock>
        <h2>Then Block will be displayed, if displayName is true</h2>
    </ng-template>
  `,
  styleUrl: './test.css'
})
export class Test {
  displayName = true
}
