import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {ProductUIModel} from '../../model/ProductUIModel';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getDataList(): Observable<any>{
    return this._getDummyProductList();
  }

  _getDummyProductList(): Observable<ProductUIModel[]>{
    let productList:ProductUIModel[];
    return of(productList);
  }

}
