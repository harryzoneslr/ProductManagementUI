import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashBoardComponent } from  './dashBoards/dashBoard.component';
import { ProductComponent } from  './product/product.component';
import { LogonUserComponent } from  './logon-user/logon-user.component';
import { StandardUnitSettingComponent } from  './standard-unit-setting/standard-unit-setting.component';
import { Routes, RouterModule, RouterOutlet } from '@angular/router'; // CLI imports router

/**
 * Global Path and Component mapping definition
 *
 */
export const routes: Routes = [
  { path: 'product', component: ProductComponent},
  { path: 'standardUnitSetting', component: StandardUnitSettingComponent },
  { path: 'logonUser', component: LogonUserComponent },
  { path: 'dashBoards', component: DashBoardComponent },
  { path: '',
    redirectTo:'/dashBoards',
    pathMatch: 'full'},
  { path: '**', redirectTo: ''}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
