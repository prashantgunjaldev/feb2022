import { Component } from '@angular/core';
import { Student } from './interfaces.def';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretive-demo';
  students: Student[];

  showImpInfo = false;

  color = 'purple';

  constructor(private std:StudentService){
    this.students = std.getAllStudents();
  }
}
