import { DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule, LowerCasePipe, UpperCasePipe, TitleCasePipe, JsonPipe, PercentPipe, DatePipe],
  template: `
        <h2>{{ name }}</h2>
        <h2>{{ name | lowercase }}</h2>
        <h2>{{ name | uppercase }}</h2>
        <h2>{{ message | titlecase }}</h2>

        <h2>{{ person | json }}</h2>

        <h2>{{ 0.25 | percent }}</h2>

        <h2>{{ today }}</h2>
        <h2>{{ today | date: 'short' }}</h2>
        <h2>{{ today | date: 'shortDate' }}</h2>
        <h2>{{ today | date: 'shortTime' }}</h2>

  `,
  styles: []
})
export class Test {
  public name = "Prathamesh";
  public message = "Welcome to prathamesh";
  public person = {
    "firstName": "Prathamesh",
    "lastName": "Borse"
  }

  public today = new Date();
}
