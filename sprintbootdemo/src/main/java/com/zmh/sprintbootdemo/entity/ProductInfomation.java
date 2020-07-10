package com.zmh.sprintbootdemo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
public class ProductInfomation {

    //	内部编号KEY
    @Id
    @GeneratedValue
    private int uuid;
    //	物料编号
    private int id;
    //	产品名称
    private String name;
    //	规格
    //    private
    //  长度
    private double length;
    //	长度单位
    private int refLengthUnit;
    //	宽度
    private double width;
    //	高度
    private double height;
    //	体积
    private double volume;
    //	体积单位
    private int refVolumeUnit;
    //	净重
    private double netweight;
    //	毛重
    private double grossweight;
    //	重量单位
    private int refWeightUnit;
    //	产品主单位
    //	引用系统标准单位，为该产品的主单位。
    private int mainUnitUUID;
    // 	数据创建用户UUID
    private String createdBy;
    //	数据创建时间
    private Date createdOn;
    //	数据最近更改用户UUID
    private String UpdatedBy;
    //	数据最近更改时间
    private Date UpdatedOn;
}
