export class UserInfo {
  id: number;
  userName: string;
  password: string;
  setId(id): void{
    this.id = id;
  }
  getId(): number{
    return this.id;
  }
  setName(name): void{
    this.userName = name;
  }
  getName(): string{
    return this.userName;
  }
  setPassword(pwd): void{
    this.password = pwd;
  }
  getPassword(): number{
    return this.id;
  }
  getFullName(): string {
    return this.id + ' ' + this.userName;
  }
}
