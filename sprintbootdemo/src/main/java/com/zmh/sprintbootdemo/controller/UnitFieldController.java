package com.zmh.sprintbootdemo.controller;

import com.zmh.sprintbootdemo.entity.UnitField;
import com.zmh.sprintbootdemo.service.UnitFieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UnitFieldController {

    @Autowired
    private UnitFieldService unitFieldService;

    @GetMapping("/getAllUnitField")
    public Object getAllUnitField(HttpServletRequest request, HttpServletResponse response){
        List<UnitField> list = this.unitFieldService.getAllUnitField();
        return list;
    }

    @GetMapping("/getUnitFieldById")
    public Object getUnitFieldById(HttpServletRequest request, HttpServletResponse response){
        String id = (String) request.getParameter("id");
        String systemCategory = (String) request.getParameter("systemCategory");
        Optional<UnitField> unitField = this.unitFieldService.getUnitFieldById(Integer.parseInt(id),Integer.parseInt(systemCategory));
        List<UnitField> list = new ArrayList<UnitField>();
        list.add(unitField.get());
        return list;
    }

    @GetMapping("/getUnitFieldByName")
    public Object getUnitFieldByName(HttpServletRequest request, HttpServletResponse response){
        String name = (String) request.getParameter("name");
        String systemCategory = (String) request.getParameter("systemCategory");
        Optional<UnitField> unitField = this.unitFieldService.getUnitFieldByName(name,Integer.parseInt(systemCategory));
        List<UnitField> list = new ArrayList<UnitField>();
        list.add(unitField.get());
        return list;
    }

    @GetMapping("/getUnitFieldByIdAndName")
    public Object getUnitFieldByIdAndName(HttpServletRequest request, HttpServletResponse response){
        String id = (String) request.getParameter("id");
        String name = (String) request.getParameter("name");
        String systemCategory = (String) request.getParameter("systemCategory");
        Optional<UnitField> unitField = this.unitFieldService.getUnitFieldByIdAndName(Integer.valueOf(id),name,Integer.parseInt(systemCategory));
        List<UnitField> list = new ArrayList<UnitField>();
        list.add(unitField.get());
        return list;
    }

    @GetMapping("/getUnitFieldBySystemCategory")
    public Object getUnitFieldBySystemCategory(HttpServletRequest request, HttpServletResponse response){
        String systemCategory = (String) request.getParameter("systemCategory");
        List<UnitField> list = this.unitFieldService.getUnitFieldBySystemCategory(Integer.valueOf(systemCategory));
        return list;
    }

    @GetMapping("/getReferenceUnit")
    public Object getReferenceUnit(HttpServletRequest request, HttpServletResponse response){
        String unitCategory = (String) request.getParameter("unitCategory");
        List<UnitField> list = unitFieldService.getReferenceUnit(Integer.valueOf(unitCategory));
        return list;
    }
}
