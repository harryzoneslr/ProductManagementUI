package com.zmh.sprintbootdemo.dao;

import com.zmh.sprintbootdemo.entity.UnitField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UnitFieldRepository extends JpaRepository<UnitField,Integer> , JpaSpecificationExecutor<UnitField> {

//    @Query(value = "select * from unit_field where name = ?", nativeQuery = true)
//    public Optional<UnitField> getUnitFieldByName(String name);
    List<UnitField> findBySystemCategory(int systemCategory);

    Optional<UnitField> findByIdAndSystemCategory(int id,int systemCategory);

    Optional<UnitField> findByNameAndSystemCategory(String name,int systemCategory);

    Optional<UnitField> findByIdAndNameAndSystemCategory(int id,String name,int systemCategory);

    List<UnitField> findByUnitCategory(int unitCategory);
}
