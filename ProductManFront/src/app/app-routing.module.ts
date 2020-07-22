import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './view/dashBoards/dashBoard.component';
import { ProductComponent } from './view/product/product.component';
import { LogonUserComponent } from './view/logon-user/logon-user.component';
import { LogonUserDetailComponent } from './view/logon-user-detail/logon-user-detail.component';
import { StandardUnitSettingComponent } from './view/standard-unit-setting/standard-unit-setting.component';
import { Routes, RouterModule, RouterOutlet } from '@angular/router'; // CLI imports router

/**
 * Global Path and Component mapping definition
 *
 */
export const routes: Routes = [
  { path: 'product', component: ProductComponent},
  { path: 'standardUnitSetting', component: StandardUnitSettingComponent },
  { path: 'logonUser', component: LogonUserComponent },
  { path: 'logonUser/:uuid', component: LogonUserDetailComponent },
  { path: 'dashBoards', component: DashBoardComponent },
  { path: '',
    redirectTo: '/dashBoards',
    pathMatch: 'full'},
  { path: '**', redirectTo: ''}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
