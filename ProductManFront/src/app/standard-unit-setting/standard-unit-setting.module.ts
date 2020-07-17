import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StandardUnitSettingComponent } from './standard-unit-setting.component';
import {routes} from "../app-routing.module";

@NgModule({
  declarations: [
    StandardUnitSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [StandardUnitSettingComponent],
  providers: []
})
export class StandardUnitSettingModule { }
