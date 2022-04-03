import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { Employee } from './interfaces.def';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp-crud';
  empoloyees : Employee[] = [];

  showError = false;

  newEmpForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    address:new FormControl('',Validators.required),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
    dept:new FormControl('',Validators.required),
    salary:new FormControl(0),
    designation:new FormControl('',Validators.required)
  });

  editEmpForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    address:new FormControl('',Validators.required),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
    dept:new FormControl('',Validators.required),
    salary:new FormControl(0),
    designation:new FormControl('',Validators.required)
  });

  constructor(private api: ApiService){
    this.fecthEmpList();
  }

  fecthEmpList(){
    this.api.getAllEmployee().subscribe(data=>{
      this.empoloyees = data;
    });
  }

  onDelete(id:number|undefined){
    if(id){
      this.api.delete(id).subscribe(data=>{
        this.fecthEmpList();
      });
    }else{
      console.log("Id is required");
    }
  }

  onEdit(emp:Employee){
    console.log("Edit Emp",emp);
    this.editEmpForm.setValue(emp);
  }

  onSubmit(){
    // console.log(this.newEmpForm);
    this.showError = this.newEmpForm.valid;
    if(this.newEmpForm.valid){
      this.api.create(this.newEmpForm.value).subscribe(data=>{
        this.newEmpForm.reset();
        this.showError = false;
        this.fecthEmpList();
      })
    }else{
      console.log("Please provide all info");
    }
  }

  onEditSubmit(){
    this.showError = this.editEmpForm.valid;
    if(this.editEmpForm.valid){
      this.api.update(this.editEmpForm.value).subscribe(data=>{
        this.editEmpForm.reset();
        this.showError = false;
        this.fecthEmpList();
      })
    }else{
      console.log("Please provide all info");
    }
  }
}
