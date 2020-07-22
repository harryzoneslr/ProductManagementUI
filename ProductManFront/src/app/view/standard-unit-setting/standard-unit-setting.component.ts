import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-standard-unit-setting',
  templateUrl: './standard-unit-setting.component.html',
  styleUrls: ['./standard-unit-setting.component.css']
})
export class StandardUnitSettingComponent implements OnInit {

  title;

  constructor() {
    this.title = 'Product List';
  }

  ngOnInit() {
  }

}
