import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../entity/UserInfo';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  results: string[]; // 返回结果 字符串数组
  myUserList: UserInfo[]; // 人员列表
  oneUser: UserInfo; // 单用户对象
  rest: string; // 返回结果 字符串格式
  constructor(private service: ServiceService) {
  }

  ngOnInit(): void{
  }

  // 查询用户列表
  findUserList(): void {
    this.service.getUserList().subscribe(data => this.myUserList = data);
  }
  getOneUser(id): any {
    this.service.getOneUser(id).subscribe(data => this.oneUser = data);
  }

  // 增加用户
  add(userName: string): void {
    userName = userName.trim();
    if (!userName) {
      return;
    }
    this.service.addUser({userName} as UserInfo)
      .subscribe(user => {
        this.myUserList.push(user);
      });
  }

  // 删除用户
  delete(user: UserInfo): void {
    this.myUserList = this.myUserList.filter(h => h !== user);
    this.service.deleteUser(user).subscribe();
  }

}
