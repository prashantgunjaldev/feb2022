import { Component } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  version = 1;

  customId = "DivNo1";

  no1:number = 0;
  no2:number = 0;
  result:number = 0;

  constructor(private calc:CalcService){

  }

  onBtnClick(){
    this.version ++;
    this.title = this.title + " "+ this.version;
  }

  addNumbers(){
    this.result = this.calc.add(this.no1,this.no2);
  }
  subNumbers(){
    this.result = this.calc.sub(this.no1,this.no2);
  }
  mulNumbers(){
    this.result = this.calc.multiply(this.no1,this.no2);
  }


}
