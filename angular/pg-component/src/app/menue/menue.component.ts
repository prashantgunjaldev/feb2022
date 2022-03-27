import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  title: string = "Pune Gurukul Test";

  // var title = "Pune Gurukul";
  // document.getElementById("title").innerText = title;

  constructor() { }

  ngOnInit(): void {
  }

}
