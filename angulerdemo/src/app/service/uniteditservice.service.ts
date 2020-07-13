import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UnitField} from '../entity/UnitField';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {log} from 'util';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UniteditserviceService {
  private serviceUrl = 'http://127.0.0.1:8888';
  constructor(private httpClient: HttpClient) { }
  // 更新数据
  saveUnitField(unitField: UnitField): Observable<any> {
    return this.httpClient.put(this.serviceUrl + '/saveUnitField', unitField, httpOptions)
      .pipe(catchError(this.handleError('unitField id=' + unitField.uuid)));
  }
  getSpecificUnitField(uuid: number): any{
    const params = new HttpParams({
      fromString: 'uuid=' + uuid
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.httpClient.get<UnitField>(this.serviceUrl + '/getSpecificUnitField', findhttpOptions)
      .pipe(catchError(this.handleError<UnitField>('getSpecificUnitField' + uuid)));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any{
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
