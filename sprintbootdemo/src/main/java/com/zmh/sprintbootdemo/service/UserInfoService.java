package com.zmh.sprintbootdemo.service;

import com.zmh.sprintbootdemo.dao.UserInfoRepository;
import com.zmh.sprintbootdemo.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;

    public List<UserInfo> findAlls() {
        return userInfoRepository.findAll();
    }

    public Optional<UserInfo> findById(int id) {
        return userInfoRepository.findById(id);
    }

    public UserInfo save(UserInfo userInfo) {
        return userInfoRepository.save(userInfo);
    }

    public void deleteById(Integer id) {
        userInfoRepository.deleteById(id);
    }
}
