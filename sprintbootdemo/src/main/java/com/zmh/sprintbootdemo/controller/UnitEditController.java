package com.zmh.sprintbootdemo.controller;

import com.zmh.sprintbootdemo.entity.UnitField;
import com.zmh.sprintbootdemo.service.UnitEditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@RestController
public class UnitEditController {

    @Autowired
    private UnitEditService unitEditService;

    @GetMapping("/getSpecificUnitField")
    public Object getUnitFieldByName(HttpServletRequest request, HttpServletResponse response){
        String uuid = (String) request.getParameter("uuid");
        Optional<UnitField> unitField = unitEditService.getSpecificUnitField(Integer.valueOf(uuid));
        return unitField;
    }

    @GetMapping("/saveUnitField")
    public void saveUnitField(HttpServletRequest request, HttpServletResponse response){
        UnitField unitField = new UnitField();
        unitField.setUuid(Integer.parseInt(request.getParameter("uuid")));
        unitField.setId(Integer.parseInt(request.getParameter("id")));
        unitField.setName((String)request.getParameter("name"));
        unitField.setReferUnitUUID(Integer.parseInt(request.getParameter("referUnitUUID")));
        unitField.setUnitCategory(Integer.parseInt(request.getParameter("unitCategory")));
        unitField.setType(Integer.parseInt(request.getParameter("type")));
        unitField.setToReferUnitFactor(Integer.parseInt(request.getParameter("toReferUnitFactor")));
        unitField.setSystemCategory(Integer.parseInt(request.getParameter("systemCategory")));
        unitField.setNote((String)request.getParameter("note"));
        unitEditService.saveUnitField(unitField);
    }
}
