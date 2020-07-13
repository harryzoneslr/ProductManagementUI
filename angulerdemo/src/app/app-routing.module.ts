import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnitqueryComponent} from './components/unitquery/unitquery.component';
import {UniteditComponent} from './components/unitedit/unitedit.component';


// 配置路由
const routes: Routes = [
  {
    path: 'query',
    component: UnitqueryComponent,
  },
  {
    path: 'edit/:msg',
    component: UniteditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
