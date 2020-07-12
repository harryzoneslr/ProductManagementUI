package com.zmh.sprintbootdemo.service;

import com.zmh.sprintbootdemo.dao.UnitFieldRepository;
import com.zmh.sprintbootdemo.entity.UnitField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UnitFieldService {

    @Autowired
    private UnitFieldRepository unitFieldRepository;

    public List<UnitField> getAllUnitField(){
        return unitFieldRepository.findAll();
    }

    public List<UnitField> getUnitFieldBySystemCategory(int systemCategory){
        return unitFieldRepository.findBySystemCategory(systemCategory);
    }

    public Optional<UnitField> getUnitFieldById(int id,int systemCategory){
        return unitFieldRepository.findByIdAndSystemCategory(id,systemCategory);
    }

    public Optional<UnitField> getUnitFieldByName(String name,int systemCategory){
        return unitFieldRepository.findByNameAndSystemCategory(name,systemCategory);
    }

    public Optional<UnitField> getUnitFieldByIdAndName(int id,String name,int systemCategory){
        return unitFieldRepository.findByIdAndNameAndSystemCategory(id,name,systemCategory);
    }

    public UnitField saveUnitField(UnitField unitField){
        return unitFieldRepository.save(unitField);
    }

    public List<UnitField> getReferenceUnit(int unitCategory){
        return  unitFieldRepository.findByUnitCategory(unitCategory);
    }
}
