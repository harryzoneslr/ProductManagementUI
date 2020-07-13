package com.zmh.sprintbootdemo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "unit_field")
public class UnitField {

    //	内部编号KEY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uuid")
    private int uuid;
    //	外部编号
    @Column(name = "id")
    private int id;
    //	单位名称
    @Column(name = "name")
    private String name;
    //	备注信息
    @Column(name = "note")
    private String note;
    //	单位系统类别
    //  1-物理单位， 2-包装单位
    @Column(name = "system_category")
    private int systemCategory;
    //	单位类型
    //  1-国际化标准单位 2-企业全局单位
    //  如果type为1, 表示该单位信息是国际化标准单位， 且基本信息是固定的，不可编辑和更改。
    //	如果type为2， 表示该单位是企业自己制定的一些全局单位，用户可以编辑和修改。
    //	当用户需要新建系统标准单位时，type固定为2， type1的单位只能系统后台导入。Type为2的单位，systemCategory固定为2-包装单位。
    @Column(name = "type")
    private int type;
    //	单位类别
    //  1-包装单位，2-重量单位， 3-体积单位，4-长度单位
    @Column(name = "unit_category")
    private int unitCategory;
    //	标准参考单位UUID
    @Column(name = "refer_unituuid")
    private int referUnitUUID;
    //	标准参考单位转率
    @Column(name = "to_refer_unit_factor")
    private double toReferUnitFactor;
}
