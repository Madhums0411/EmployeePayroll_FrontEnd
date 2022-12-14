import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private http: HttpService) { 
    this.token = localStorage.getItem('token')
  }
  RegisterForm(data: any) {
    console.log(data, this.token);

    let header = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token

      })
    }
    return this.http.postService('https://localhost:44357/api/EmployeeForm/Create', data, true, header)
  }
  GetForm() {
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.getService('https://localhost:44357/api/EmployeeForm/GetAll', true, header)

  }
}
