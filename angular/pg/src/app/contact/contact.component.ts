import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isSubmitted = false;
  isError = false;

  contactForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
    query:new FormControl('',Validators.required)
  });

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get mobile() { return this.contactForm.get('mobile'); }
  get query() { return this.contactForm.get('query'); }

  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.isError = !this.contactForm.valid;
    if(this.contactForm.valid){
      this.api.submitQuery(this.contactForm.value).subscribe(data=>{
      this.isSubmitted = true;
      });
    }else{
      this.contactForm.markAllAsTouched();
      console.log(this.contactForm);
    }
  }

}
