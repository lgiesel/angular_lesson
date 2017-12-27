import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; //Must tell app.mod about http 1x

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './misc/resume.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component'; 
import { UserService } from './user/user.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ResumeComponent,
    PlaygroundComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent 
  ],
  imports: [//Order in this list matters: browser 1st, forms, then all angular pcs nxt, approuting is last but other ng can appear after
    BrowserModule,
    FormsModule,
    HttpModule,        //Placement is key here; 
    AppRoutingModule
  ],
  providers: [UserService], //key-value pair; only key so far in providers key
  bootstrap: [AppComponent]
})
export class AppModule { }
