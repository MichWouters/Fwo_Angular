import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female', 'other'];
  signupForm!: FormGroup;
  forbiddenUserNames = ['Pepe', 'Dick'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.isNameForbidden]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([]),
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl();
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  isNameForbidden(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }

    return { 'nameIsForbidden': false };
  }

}
