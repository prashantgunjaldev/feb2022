import { Injectable } from '@angular/core';
import { Student } from './interfaces.def';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getAllStudents(): Student[]{
    return [
      {
          fName:"Suresh",
          lName:"Thakare",
          class:1
      },{
          fName:"Ramesh",
          lName:"Thakare",
          class:3
      },{
          fName:"Sandesh",
          lName:"Thae",
          class:2
      },{
          fName:"Sandip",
          lName:"Thakare",
          class:4
      },{
          fName:"Sudesh",
          lName:"Thakare",
          class:3
      }
  ];
  }
}
