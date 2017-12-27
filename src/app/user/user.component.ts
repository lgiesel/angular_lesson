import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   user: User;

  showConsole(): void {
    console.log(this.user);
  }

  constructor(){}

  ngOnInit() {
//  	this.user = new User(1, 'myusername', 'pwd543', 'Sally', 'Smith', '555.111.2222', "e@e.com", true, false, true);
    this.user = new User(0, '', '', '', '', '', '', true, false, true, new Date());
    this.showConsole();
  }

}