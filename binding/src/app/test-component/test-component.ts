import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [NgClass, NgStyle],
  template: `
            <h2>
              Welcome {{name}}
            </h2>

            <h2>
              {{2+2}}
            </h2>
            
            <h2>
              {{name.length}}
            </h2>

            <h2>
              {{name.toUpperCase()}}
            </h2>

            <h2 class="text-success text-special">
              {{greetUser()}}
            </h2>


            <input [id]="myId" type="text" value="Prathamesh">

            <h2 class="text-success">Prathamesh</h2>
            <h2 [class]="successClass">Prathamesh</h2>
            <h2 class="text-special" [class]="successClass">Prathamesh</h2>
            <h2 [class.text-danger]="hasError">Prathamesh</h2>

            <h2 [ngClass]="messageClasses">Prathamesh</h2>

            <h2 [style.color]="'orange'">Style Binding</h2>

            <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding with Condition</h2>

            <h2 [style.color]="highlightColor">Style Binding 2</h2>

            <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

            <button (click)="onClick($event)">Greet</button>
            {{greeting}}

            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>
            `,

    styles: [`
        .text-success {
        color: green;
        }

        .text-danger {
          color: red;
        }
          
        .text-special {
          font-style: italic;
        }
      `]
})
export class TestComponent {
  public name = "Nilesh";

  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyles = {
    fontStyle: "italic",
    color: "blue"
  }

  public myId = "testId";

  greetUser() {
    return "Hello " + this.name;
  }

  public greeting = ""; 

  onClick(event : any): void {
    console.log(event);
    this.greeting = "Welcome to Angular App";
  }

  logMessage(value : any) {
    console.log(value)
  }
}
