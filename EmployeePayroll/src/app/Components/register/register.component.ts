import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/service/noteservice/note.service';
interface Salary {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  createForm!: FormGroup;

  salarys: Salary [] = [
    {value: '0', viewValue: '100000-300000'},
    {value: '1', viewValue: '300000-500000'},
    {value: '2', viewValue: '500000-700000'},
  ];

  
  constructor(private formbuilder: FormBuilder , private note:NoteService) {}

 ngOnInit(): void {
    this.createForm = this.formbuilder.group({
      name: ['', Validators.required],
      Image:['', Validators.required],
    })
  }
  submit() {
     console.log(this.createForm.value.name, this.createForm.value.Image);
    let data = {
      name:this.createForm.value.name,
      Image:this.createForm.value.Image,
    }
     this.note.RegisterForm(data).subscribe((result: any) => {
      console.log(result);
     })
  }

}
