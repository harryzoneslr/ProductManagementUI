package com.zmh.sprintbootdemo.controller;

import com.zmh.sprintbootdemo.entity.UserInfo;
import com.zmh.sprintbootdemo.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class UserInfoController {

    @Autowired(required = false)
    private UserInfoService userInfoService;

    @GetMapping(value="/list")
    public ModelAndView list(Map<String,Object> map){
        List<UserInfo> list = this.userInfoService.findAlls();
        map.put("userinfos",list);
        return new ModelAndView("baseinfo/userInfo",map);
    }

    @GetMapping(value="/findOneUser")
    public Object findOneUser(HttpServletRequest request,HttpServletResponse response){
        String id = (String) request.getParameter("id");
        Optional<UserInfo> userInfo = this.userInfoService.findById(Integer.parseInt(id));
        return userInfo;
    }

    @CrossOrigin
    @GetMapping(value="/findUserList")
    public Object  findUserList(HttpServletRequest request,HttpServletResponse response){
        String name = (String)request.getParameter("_page");
        System.out.println(">>>>>>>>>>>>>>>>>>"+name);
        List<UserInfo> list = this.userInfoService.findAlls();
        return list;
    }

    @ResponseBody
    @PostMapping(value="/save")
    public UserInfo save(HttpServletResponse response, @RequestBody  UserInfo userInfo){
        return this.userInfoService.save(userInfo);
    }

    @ResponseBody
    @PutMapping(value="/update")
    public UserInfo update(HttpServletResponse response, @RequestBody  UserInfo userInfo){
        return this.userInfoService.save(userInfo);
    }

    @ResponseBody
    @DeleteMapping
    public void delete(HttpServletResponse response, @RequestBody  UserInfo userInfo){
        if(null == userInfo) return;
        this.userInfoService.deleteById(userInfo.getId());
    }
}
