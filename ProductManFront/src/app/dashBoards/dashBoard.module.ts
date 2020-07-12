import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashBoardComponent } from './dashBoard.component';

@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [DashBoardComponent],
  providers: []
})
export class DashBoardModule { }
