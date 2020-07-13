package com.zmh.sprintbootdemo.service;

import com.zmh.sprintbootdemo.dao.UnitEditRepository;
import com.zmh.sprintbootdemo.entity.UnitField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UnitEditService {
    @Autowired
    private UnitEditRepository unitEditRepository;

    public Optional<UnitField> getSpecificUnitField(int uuid){
        return unitEditRepository.findById(uuid);
    }

    public void saveUnitField(UnitField unitField){
        unitEditRepository.save(unitField);
    }
}
