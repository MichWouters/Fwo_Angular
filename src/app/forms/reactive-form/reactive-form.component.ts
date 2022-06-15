import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm!: FormGroup;
  genders = ['Male', 'Female', 'Gmail'];

 constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, CustomValidators.isNameForbidden]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('Female'),
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }




}
