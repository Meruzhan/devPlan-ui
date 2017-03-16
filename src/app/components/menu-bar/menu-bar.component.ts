import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  isLogin(){
     return localStorage.getItem("token");
  }


  logOut(){
      localStorage.clear();
  }
}
