package com.zmh.sprintbootdemo;

import com.zmh.sprintbootdemo.dao.UnitFieldRepository;
import com.zmh.sprintbootdemo.entity.UnitField;
import com.zmh.sprintbootdemo.service.UnitFieldService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

@SpringBootTest
class SprintbootdemoApplicationTests {

    @Autowired
    UnitFieldRepository unitFieldRepository;

    @Test
    void contextLoads() {
    }

    @Test
    void unitFieldLise(){
        Optional<UnitField> unitField = unitFieldRepository.findByNameAndSystemCategory("kg",1);
        System.out.println(unitField.get().getUuid() + "   " + unitField.get().getId());
    }

    @Test
    void getUnitFieldById(){
//        UnitField unitField = new UnitField();
//        unitField.setName("kg");
//        Optional<UnitField> opt = Optional.of(unitField);
//        Optional<UnitField> optUnitField = unitFieldRepository.findOne(opt);
//        System.out.println(optUnitField.get().getId());
//        System.out.println(optUnitField.get().getUuid());
    }

    @Test
    void save(){
        UnitField unitField = new UnitField();

        unitField.setUuid(4);
        unitField.setId(5);
        unitField.setName("kg");
        unitField.setNote("meiyou");
        unitField.setSystemCategory(1);
        unitField.setToReferUnitFacor(1);
        unitField.setType(1);
        unitField.setUnitCategory(1);
        unitField.setReferUnitUUID(1);

        unitFieldRepository.save(unitField);
    }

    @Test
    void delete(){
        unitFieldRepository.deleteById(4);
    }
}
