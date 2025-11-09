import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
import { Enrollment } from './enrollment';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [NgFor, FormsModule, JsonPipe, NgIf, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Demo', 'demo@gmail.com', 9876543210, 'default', 'Morning', true);
  topicHasError: boolean = true;
  submitted: boolean = false;
  errorMsg: string = '';

  constructor(private _enrollmentService: Enrollment, private ngZone: NgZone) { }

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
  };
}
