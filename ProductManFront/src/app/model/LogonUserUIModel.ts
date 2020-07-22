import {ServiceUIModel} from './ServiceUIModel';

export class LogonUserUIModel extends ServiceUIModel{

  private _conntryCode: string;
  private _address: string;
  private _avatar: string;

  constructor(
              private _name: string,
              private _role: string,
              private _age: number,
              private _email: string,
              private _mobile: string,
              private _gender: number,
              private _genderValue: string) {
    super();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get gender(): number {
    return this._gender;
  }

  set gender(value: number) {
    this._gender = value;
  }

  get genderValue(): string {
    return this._genderValue;
  }

  set genderValue(value: string) {
    this._genderValue = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get conntryCode(): string {
    return this._conntryCode;
  }

  set conntryCode(value: string) {
    this._conntryCode = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }
}
