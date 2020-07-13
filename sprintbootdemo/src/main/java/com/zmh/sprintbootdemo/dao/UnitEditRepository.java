package com.zmh.sprintbootdemo.dao;

import com.zmh.sprintbootdemo.entity.UnitField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitEditRepository extends JpaRepository<UnitField,Integer>, JpaSpecificationExecutor<UnitField> {
}
