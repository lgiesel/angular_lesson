import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; //.. means go back up a folder to find user.service file; single . means curr folder
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private UserSvc: UserService) { } //Injects usesrvc into user-list wo having to build infrastructure

  ngOnInit() {//Called once when component fires up; good place to put things to do
  	this.UserSvc.list()
	.then(data => {
		this.users = data;
		console.log(this.users);
	}); 
  }

}

//list all users