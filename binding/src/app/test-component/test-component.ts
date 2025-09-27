import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
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

            <h2>
              {{greetUser()}}
            </h2>
            `,
})
export class TestComponent {
  public name = "Nilesh";

  greetUser() {
    return "Hello " + this.name;
  }
}
