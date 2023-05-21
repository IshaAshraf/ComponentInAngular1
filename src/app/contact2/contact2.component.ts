import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit{
  genders = [
    {
      id:1,
      genderType: 'Male'
    },
    {
      id:2,
      genderType: 'Female'
    }
  ];
  myReactiveForm!: FormGroup;
ngOnInit(){
  this.myReactiveForm = new FormGroup({
    'userDetail': new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),

    }),
  // 'username': new FormControl(null, Validators.required),
  // 'email': new FormControl(null, [Validators.required, Validators.email]),
  'course': new FormControl('HTML'),
  'gender': new FormControl('Female'),
  'skills': new  FormArray([
    new FormControl(null, Validators.required)
    // new FormControl(null, Validators.required),
    // new FormControl(null, Validators.required)
  ])
})
}
onSubmit(){
  console.log('form data',this.myReactiveForm.value)
}

onAddSkills(){
  const control = new FormControl(null, Validators.required);
  (<FormArray>this.myReactiveForm.get('skills')!).push(control)
}
}
