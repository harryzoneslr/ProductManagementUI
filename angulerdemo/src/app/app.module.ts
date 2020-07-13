import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { UnitqueryComponent } from './components/unitquery/unitquery.component';
import { UniteditComponent } from './components/unitedit/unitedit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    UnitqueryComponent,
    UniteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
