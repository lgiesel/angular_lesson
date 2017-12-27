import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuitems: Menu[] = [
  	new Menu ('HOME', '/home', 'Home menu item'), 
    new Menu ('PLAYGROUND', '/playground', 'Playground menu item'), 
    new Menu ('RESUME', '/resume', 'My Resume'), 
    new Menu ('USER', '/user', 'User menu'), 
    new Menu ('USERLIST', '/userlist', 'User List menu'),  // ./userlist MUST match a path in app.routing, which does NOT have / in routing file
  	new Menu ('ABOUT', '/about', 'About menu item')
  ];

  constructor() { }

  ngOnInit() {
  }

}
