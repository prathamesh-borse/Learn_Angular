import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { confirmPasswordValidator } from './shared/password.validator';
import { Registration } from './registration';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('reactive-forms');

  // we need to assign registrationForm with the FormGroup 
  // in latest angular we need to initialize it
  registrationForm: FormGroup = new FormGroup({});

  // get UserName method 
  get userName() {
    return this.registrationForm.get('userName');
  }

  // get Email Method
  get email() {
    return this.registrationForm.get('email');
  }

  // get alternateEmails
  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  // method to dynamically call the FormArray
  addalternateEmails() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService: Registration) { }

  // ngOnIt method
  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      // remove the extra validators from confirmPassword to apply cross validation to match and 
      // password and confirmPassword
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.required]
      }),
      // Dynamic Form Control
      alternateEmails: this.fb.array([])
    }, { validators: confirmPasswordValidator });

    // conditional validation code for email subscribe
    this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity(); // to show the correct status about the validators
      })
  }

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'city',
        state: 'state',
        postalCode: '123456'
      }
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('success', response),
        error => console.log('Error!', error)
      );
  }
}
