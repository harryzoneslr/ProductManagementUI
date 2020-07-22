import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ActivatedRoute} from '@angular/router';
import {LogonUserUIModel} from '../../model/LogonUserUIModel';
import {switchMap} from 'rxjs/operators';
import {LogonUserService} from '../../services/logonUser/logonUser.service';

@Component({
  selector: 'app-logon-user-detail',
  templateUrl: './logon-user-detail.component.html',
  styleUrls: ['./logon-user-detail.component.css']
})
export class LogonUserDetailComponent implements OnInit {

  public logonUser: LogonUserUIModel;

  private lognUserUUID: string;

  constructor(
    private logonUserService: LogonUserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.lognUserUUID = params.get('uuid');
        return this.logonUserService.getDataByUUID(this.lognUserUUID);
      })
    ).subscribe(logonUser => this.logonUser = logonUser);
  }


}
