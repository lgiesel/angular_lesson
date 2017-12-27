import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component'; 
import { ResumeComponent } from './misc/resume.component'; 
import { PlaygroundComponent } from './playground/playground.component'; 
import { UserComponent } from './user/user.component'; 
import { UserListComponent } from './user/user-list/user-list.component'; 
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [//Sys picks 1st route it finds-more specific path s/ come before home
	{ path: '', redirectTo: '/', pathMatch: 'full' },  //If path null, u can redirect to localhost:4200/
	{ path: 'home', component: HomeComponent },  //What appears in browser url - localhost:4200/home  
	{ path: 'resume', component: ResumeComponent },  
	{ path: 'playground', component: PlaygroundComponent },  
	{ path: 'user', component: UserComponent },  
	{ path: 'userlist', component: UserListComponent }, //Path param does NOT have / in it but it matches menu.component /userlist
	{ path: 'user/detail/:id', component: UserDetailComponent }, //Path param does NOT have / in it but it matches menu.component /userlist
	{ path: '**', component: HomeComponent } 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }