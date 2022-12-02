import { Component, OnInit } from '@angular/core';
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
  salarys: Salary [] = [
    {value: '0', viewValue: '100000-300000'},
    {value: '1', viewValue: '300000-500000'},
    {value: '2', viewValue: '500000-700000'},
  ];

  
  constructor() {}

  ngOnInit(): void {
  }

}
