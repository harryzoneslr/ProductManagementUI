package com.zmh.sprintbootdemo.service;

import com.zmh.sprintbootdemo.dao.UnitFieldRepository;
import com.zmh.sprintbootdemo.entity.UnitField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UnitFieldService {

    @Autowired
    private UnitFieldRepository unitFieldRepository;

    public Optional<UnitField> getUnitFieldById(int id){
        return unitFieldRepository.findById(id);
    }
}
