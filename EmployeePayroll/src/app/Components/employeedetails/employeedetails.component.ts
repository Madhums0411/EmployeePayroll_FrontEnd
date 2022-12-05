import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';



@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
  noteArray: any;

  constructor(private note: NoteService) { }
friend:any;
ngOnInit(): void {
  this.getAllNote();
}
getAllNote() {
  this.note.GetForm().subscribe((response: any) => {
    console.log(response.data);
    this.noteArray = response.data;
    this.noteArray = this.noteArray.reverse()
    this.noteArray = this.noteArray.filter()
  })
}
}
