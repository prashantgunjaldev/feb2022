import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../interfaces.def';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private api:ApiService) { }

  courses : Course[] = [];

  ngOnInit(): void {
    this.api.getCourses().subscribe(data=>{
      this.courses = data;
    });
  }

}
