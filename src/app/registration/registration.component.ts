import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registerForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit(){
    if(this.registerForm.valid){
      console.log("Valid data", this.registerForm.value);
    }
    else{
      console.log("Invalid data", this.registerForm.value);
    }
  }
}
