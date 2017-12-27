import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; //import for user-details
import 'rxjs/add/operator/switchMap'; //Import as well for detailss

import { User } from '../user';
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;	

  constructor(private UserSvc: UserService,
  	          private router: Router,	//Allows user to go back to list
  	          private route: ActivatedRoute) {//Says what route was selected by user
  	            	           }

  ngOnInit() {
  	this.route.paramMap 
 		.switchMap((params:ParamMap) => 
 			this.UserSvc.get(params.get('id')))	
		.subscribe((user: User[]) => this.user = user[0]);	
		//user in subscribe can b used in user-detail.html to render use table w 2 cols - s/b able to see
  }

}
