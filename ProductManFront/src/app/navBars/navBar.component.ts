import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router'; // CLI imports router

@Component({
  selector: 'nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
