package com.zmh.sprintbootdemo.controller;

import com.zmh.sprintbootdemo.entity.UnitField;
import com.zmh.sprintbootdemo.service.UnitFieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@RestController
public class UnitFieldController {

    @Autowired
    private UnitFieldService unitFieldService;

    @GetMapping("/getUnitFieldById")
    public Object getUnitFieldById(HttpServletRequest request, HttpServletResponse response){
        String id = (String) request.getParameter("id");
        System.out.println(id);
        Optional<UnitField> unitField = this.unitFieldService.getUnitFieldById(Integer.parseInt(id));
        return unitField.get();
    }
}
