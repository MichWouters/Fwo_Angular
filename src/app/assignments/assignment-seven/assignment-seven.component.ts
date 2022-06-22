import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyCustomValidator } from './custom-validator';

@Component({
  selector: 'app-assignment-seven',
  templateUrl: './assignment-seven.component.html',
  styleUrls: ['./assignment-seven.component.css']
})
export class AssignmentSevenComponent implements OnInit {
  projectForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, MyCustomValidator.invalidProjectName]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable'),
    });
  }

  onSaveProject():void{
    console.log(this.projectForm);
  }

}
