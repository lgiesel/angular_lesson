export class User {
	id: number;
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	phone: string;
	email: string;
	reviewer: boolean;
	admin: boolean;
	active: boolean;	
	datecreated: Date;
	//Add all fields in DB to POJO - DO NOT HAAVE TO POPULATE THESE LIKE DATE CREATED, JUST READ ONLY

	constructor ( id: number, username: string, password: string, fn: string, ln: string, phone: string, email: string, reviewer: boolean, admin: boolean, active: boolean, datecreated: Date){
		this.id = id;
		this.username = username;
		this.password = password;
		this.firstname = fn;
		this.lastname = ln;
		this.phone = phone;
		this.email = email;
		this.reviewer = reviewer;
		this.admin = admin;		
		this.active = active;	
		this.datecreated = datecreated;	
	}

}
