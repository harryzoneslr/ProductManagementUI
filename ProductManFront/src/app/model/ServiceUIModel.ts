/**
 * Super UI Model contains admin fields for all the business UI Model in front end project
 */
export class ServiceUIModel {

  // internal DB entry key
  private _uuid: string;

  // external id
  private _id: string;
  private _lastChangedBy: string;
  private _lastChangedOn: string;
  private _createdBy: string;
  private _createdOn:  string;

  constructor() {
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get lastChangedBy(): string {
    return this._lastChangedBy;
  }

  set lastChangedBy(value: string) {
    this._lastChangedBy = value;
  }

  get lastChangedOn(): string {
    return this._lastChangedOn;
  }

  set lastChangedOn(value: string) {
    this._lastChangedOn = value;
  }

  get createdBy(): string {
    return this._createdBy;
  }

  set createdBy(value: string) {
    this._createdBy = value;
  }

  get createdOn(): string {
    return this._createdOn;
  }

  set createdOn(value: string) {
    this._createdOn = value;
  }
}
