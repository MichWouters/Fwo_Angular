import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  defaultQuestion?: string = 'pet';
  answer?: string = '';
  genders = ['Male', 'Female', 'Gmail'];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm): void {
    console.log(myForm);
  }

}
