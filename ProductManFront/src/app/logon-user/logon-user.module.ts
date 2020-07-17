import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LogonUserComponent } from './logon-user.component';
import {routes} from "../app-routing.module";

@NgModule({
  declarations: [
    LogonUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [LogonUserComponent],
  providers: []
})
export class LogonUserModule { }
