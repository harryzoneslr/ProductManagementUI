import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes, AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule, RouterOutlet } from '@angular/router'; // CLI imports router

import { NavBarModule } from  './navBars/navBar.module';
import { AppComponent } from './app.component';
import { StandardUnitSettingComponent } from './view/standard-unit-setting/standard-unit-setting.component';
import { ProductComponent } from './view/product/product.component';
import { LogonUserComponent } from './view/logon-user/logon-user.component';
import { LogonUserDetailComponent } from './view/logon-user-detail/logon-user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StandardUnitSettingComponent,
    ProductComponent,
    LogonUserComponent,
    LogonUserDetailComponent,
    LogonUserDetailComponent
  ],
  imports: [
    NavBarModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
