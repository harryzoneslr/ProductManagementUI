package com.zmh.sprintbootdemo.dao;

import com.zmh.sprintbootdemo.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserInfoRepository extends JpaRepository<UserInfo,Integer> {
    //自定义接口
    //通过年龄来查询
    //public List<UserInfo> findByAge(Integer age);
}
