import {ServiceUIModel} from './ServiceUIModel';

export class ProductUIModel extends ServiceUIModel {

  constructor(
              private _name: string,
              private _packageStandard: string,
              private _mainUnit: string,
              private _mainUnitValue: string,
              private _length: number,
              private _weight: string) {
    super( );

  }
}
