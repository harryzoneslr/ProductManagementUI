import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './navBar.component';
import {routes} from "../app-routing.module";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [NavBarComponent],
  providers: []
})
export class NavBarModule { }
