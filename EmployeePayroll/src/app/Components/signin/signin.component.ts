import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userservice/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Phone:['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(4)]],
      Confirm: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      console.log("valid data", this.signinForm.value);
      console.log("do api call");
      let data = {
        firstName: this.signinForm.value.firstName,
        lastName: this.signinForm.value.lastName,
        email: this.signinForm.value.email,
        password: this.signinForm.value.password
      }
      this.user.signin(data).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
}
