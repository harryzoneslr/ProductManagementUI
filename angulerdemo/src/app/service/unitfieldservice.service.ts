import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UnitField} from '../entity/UnitField';
import {catchError} from 'rxjs/operators';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class UnitfieldserviceService {

  private serviceUrl = 'http://127.0.0.1:8888';
  constructor(private httpClient: HttpClient) { }
  getAllUnitField(): Observable<UnitField[]> {
    return this.httpClient.get<UnitField[]>(this.serviceUrl + '/getAllUnitField');
  }
  getUnitFieldById(id: number, systemCategory: number): Observable<UnitField[]>{
    const params = new HttpParams({
      fromString: 'id=' + id + '&systemCategory=' + systemCategory
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.httpClient.get<UnitField>(this.serviceUrl + '/getUnitFieldById', findhttpOptions)
      .pipe(catchError(this.handleError<UnitField>('getUnitFieldById' + id)));
  }
  getUnitFieldByName(name: string, systemCategory: number): Observable<UnitField[]>{
    const params = new HttpParams({
      fromString: 'name=' + name + '&systemCategory=' + systemCategory
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.httpClient.get<UnitField>(this.serviceUrl + '/getUnitFieldByName', findhttpOptions)
      .pipe(catchError(this.handleError<UnitField>('getUnitFieldByName' + name)));
  }
  getUnitFieldByIdAndName(id: number, name: string, systemCategory: number): any{
    const params = new HttpParams({
      fromString: 'id=' + id + '&name=' + name + '&systemCategory=' + systemCategory
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.httpClient.get<UnitField>(this.serviceUrl + '/getUnitFieldByIdAndName', findhttpOptions)
      .pipe(catchError(this.handleError<UnitField>('getUnitFieldByIdAndName' + id)));
  }
  getUnitFieldBySystemCategory(systemCategory: number): any{
    const params = new HttpParams({
      fromString: 'systemCategory=' + systemCategory
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.httpClient.get<UnitField>(this.serviceUrl + '/getUnitFieldBySystemCategory', findhttpOptions)
      .pipe(catchError(this.handleError<UnitField>('getUnitFieldBySystemCategory' + systemCategory)));
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
