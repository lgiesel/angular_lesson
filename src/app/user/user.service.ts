import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'; //makes ajax call ; tell app.mod 1x about http
import 'rxjs/add/operator/toPromise'; //injecting addl fxnlty
import 'rxjs/add/operator/map'; //injecting addl fxnlty

import { User } from './user'; //blueprint for each class components

//Technique for svc if employed elsewhere, url can b set - UURL FOR POSTMAN TO TALK TO DB; not SAME ASE LOCALHOST:4200 /PATH
const urlBase = 'http://localhost:8080/'; //instead of gregss url - url to my db
const mvcCtrl = 'Users/';
const url: string = urlBase + mvcCtrl; //Controller this talks to ; gregsurl/List for ex

@Injectable() //This srvc is injected into otherthings
export class UserService {

	//Promise in JS is a promise that req is coming back
	list(): Promise<User[]> {
		return this.http.get(url+"List") //Like getJSON GET W URL
			.toPromise() //turns into promise - sending back to sys that called
			.then(resp => resp.json() as User[]) //resp lamda states resp in JSON and cast response as User[]
			.catch(this.handleError);
	}

	get(id): Promise<User[]> {
		return this.http.get(url+"Get?id=" + id) 
			.toPromise() 
			.then(resp => resp.json() as User[])
			.catch(this.handleError);
	}
//turns into promise - sending back to sys that called
 //returns 1 user

	//All methods making ajax call will use this generic error handler
	private handleError(error:any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

  constructor(private http: Http) { } //Must inject http srvc into our srvc in param list 
  //any code inside class can use this

}
