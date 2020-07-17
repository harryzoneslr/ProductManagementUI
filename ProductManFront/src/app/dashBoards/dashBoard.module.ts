import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashBoardComponent } from './dashBoard.component';
import {routes} from "../app-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [DashBoardComponent],
  providers: []
})
export class DashBoardModule { }
