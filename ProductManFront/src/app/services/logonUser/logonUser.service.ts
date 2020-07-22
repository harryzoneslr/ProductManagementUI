import { Injectable } from '@angular/core';
import { LogonUserUIModel } from '../../model/LogonUserUIModel';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import { v4 as uuid } from 'uuid';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogonUserService {

  private _dummyUserList: LogonUserUIModel[] = [];

  constructor() { }

  getDataList(): Observable<any> {
    return this._getDummyUserList();
  }

  getDataByUUID(uuid: string): Observable<any> {
    return this._getDummyUserByUUID(uuid);
  }

  _getUUID(): string {
    const result: string = uuid();
    return result;
  }

  _getDummyUserByUUID(uuid: string): Observable<LogonUserUIModel> {
    const logonUserList$: Observable<LogonUserUIModel[]> = this._getDummyUserList();
    let result$: Observable<LogonUserUIModel> ;
    result$ = logonUserList$.pipe(
      map(array => {
           const filteredArray: LogonUserUIModel[] = array.filter( tmpUser => tmpUser.uuid === uuid);
           if (filteredArray && filteredArray.length > 0) {
             return filteredArray[0];
           } else {
             return null;
           }
    }));
    return result$;
  }

  _getDummyUserList(): Observable<LogonUserUIModel[]> {

    if (this._dummyUserList && this._dummyUserList.length > 0) {
      return of(this._dummyUserList);
    }
    const i00101: LogonUserUIModel = new LogonUserUIModel('Joseph Haydn',
      'Manager',
      45,
      'joseph.haydn@sap.com',
      '0086-13884296205',
      1,
      'male');
    i00101.id = 'i00101';
    i00101.uuid = this._getUUID();
    i00101.conntryCode = 'AU';
    i00101.avatar = '../assets/img/avatars/profiles/avatar-1.jpg';
    i00101.address = 'Rohrau, Austria';
    this._dummyUserList.push(i00101);

    const i00102: LogonUserUIModel = new LogonUserUIModel(
      'Ludwig,Beethoven',
      'Product Owner',
      38,
      'ludwig.beethoven@sap.com',
      '0086-18650696435',
      1,
      'male');
    i00102.id = 'i00102';
    i00102.uuid = this._getUUID();
    i00102.conntryCode = 'DE';
    i00102.avatar = '../assets/img/avatars/profiles/avatar-2.jpg';
    i00102.address = 'Bonn, Germany';
    this._dummyUserList.push(i00102);

    const i00103: LogonUserUIModel = new LogonUserUIModel(
      'Walfgang, Mozart',
      'Employee',
      35,
      'walfgan.mozart@sap.com',
      '0086-18280696457',

      2,
      'female');
    i00103.id = 'i00103';
    i00103.uuid = this._getUUID();
    i00103.conntryCode = 'AU';
    i00103.avatar = '../assets/img/avatars/profiles/avatar-3.jpg';
    i00103.address = 'Salzburg, Austria';
    this._dummyUserList.push(i00103);

    const i00104: LogonUserUIModel = new LogonUserUIModel(
      'Richard, Wagner',
      'Employee',
      28,
      'wagner.richard@sap.com',
      '0086-15682611776',
      1,
      'male');
     i00104.id = 'i00104';
    i00104.conntryCode = 'DE';
    i00104.avatar = '../assets/img/avatars/profiles/avatar-4.jpg';
    i00104.address = 'Salzburg, Germany';
     i00104.uuid = this._getUUID();
    this._dummyUserList.push(i00104);
      return of(this._dummyUserList);
  }

}
