import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  textForAdmin: string = '';
  labelMessage: string = 'No color';

  buttonClick (): void {
    this.textForAdmin = "";
  }  

  buttonClick1 (): void {
  	this.labelMessage = "Red!!"; 
  }	

  buttonClick2 (): void {
  	this.labelMessage = "Green!!"; 
  }	

  buttonClick3 (): void {
  	this.labelMessage = "Blue! Whoo hoo"; 
  }	

  constructor() { }

  ngOnInit() {
  }

}
