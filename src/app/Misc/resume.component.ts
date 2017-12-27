import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  isAdmin: boolean = true;
  todayIsTuesday: boolean = false;
  textForAdmin: string = '';

  buttonClick (): void {
  	this.textForAdmin = "An admin clicked the button"; 
  }

  constructor() { }

  ngOnInit() {
  }

}
