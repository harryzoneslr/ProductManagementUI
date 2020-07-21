import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LogonUserDetailComponent } from './logon-user-detail.component';
import {routes} from '../app-routing.module';

@NgModule({
  declarations: [
    LogonUserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [LogonUserDetailComponent],
  providers: []
})
export class LogonUserDetailModule { }
