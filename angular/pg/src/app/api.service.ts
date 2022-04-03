import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact, Course } from './interfaces.def';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  getCourses(){
    return this.http.get<Course[]>( environment.serverHost+'/courses');
  }

  submitQuery(contact:Contact){
    return this.http.post<any>( environment.serverHost+'/contact',contact);
  }
}
