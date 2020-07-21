import { Component, OnInit } from '@angular/core';
import { LogonUserService } from '../services/logonUser/logonUser.service';
import {LogonUserUIModel}  from '../model/LogonUserUIModel';
import {Observable} from 'rxjs/internal/Observable'; // CLI imports router

@Component({
  selector: 'app-logon-user',
  templateUrl: './logon-user.component.html',
  styleUrls: ['./logon-user.component.css']
})
export class LogonUserComponent implements OnInit {
  logonUserList$: Observable<LogonUserUIModel[]>;

  constructor(private logonUserService: LogonUserService) { }

  ngOnInit() {
    this.loadDataList();
  }

  /**
   * Function to generate dummy product list, should be replaced backend API call logic later
   */
  loadDataList(){
    this.logonUserList$ = this.logonUserService.getDataList();
  }

}
