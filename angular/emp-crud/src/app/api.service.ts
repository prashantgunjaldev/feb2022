import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './interfaces.def';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8080';
  api = '/employee';
  constructor(private http: HttpClient) { }

  getAllEmployee(){
    return this.http.get<Employee[]>(this.baseUrl+this.api);
  }

  create(emp:Employee){
    return this.http.post<any>(this.baseUrl+this.api,emp);
  }

  update(emp:Employee){
    return this.http.put<any>(this.baseUrl+this.api,emp);
  }

  delete(id:number){
    return this.http.delete<any>(this.baseUrl+this.api+`/${id}`);
  }
}
