import { Component, OnInit } from '@angular/core';
import { UnitField } from '../../entity/UnitField';
import { UnitfieldserviceService } from '../../service/unitfieldservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unitquery',
  templateUrl: './unitquery.component.html',
  styleUrls: ['./unitquery.component.css']
})
export class UnitqueryComponent implements OnInit {
  public myUnitField: UnitField[];
  public id: number;
  public name: string;
  public systemCategory = 1;
  public message: number;
  constructor(private service: UnitfieldserviceService,  private router: Router) { }

  ngOnInit(): void {
    this.getAllUnitField();
  }
  sendMessage(uuid): any{
    this.router.navigate(['/edit/' + uuid]);
  }

  getAllUnitField(): any {
    return this.service.getAllUnitField().subscribe(data => this.myUnitField = data) ;
  }
  getUnitFieldList(): any {
    if (this.id != null && this.name != null){
      return this.getUnitFieldByIdAndName(this.id, this.name, this.systemCategory);
    }
    if (this.id != null && this.name == null){
      return this.getUnitFieldById(this.id, this.systemCategory);
    }
    if (this.id == null && this.name != null){
      return this.getUnitFieldByName(this.name, this.systemCategory);
    }
    if (this.id == null && this.name == null){
      return this.getUnitFieldBySystemCategory(this.systemCategory);
    }
  }
  getUnitFieldById(id: number, systemCategory: number): any {
    return this.service.getUnitFieldById(id, systemCategory).subscribe(data => this.myUnitField = data);
  }
  getUnitFieldByName(name: string, systemCategory: number): any{
    return this.service.getUnitFieldByName(name, systemCategory).subscribe(data => this.myUnitField = data);
  }
  getUnitFieldByIdAndName(id: number, name: string, systemCategory: number): any{
    return this.service.getUnitFieldByIdAndName(id, name, systemCategory).subscribe(data => this.myUnitField = data);
  }
  getUnitFieldBySystemCategory(systemCategory: number): any{
    return this.service.getUnitFieldBySystemCategory(systemCategory).subscribe(data => this.myUnitField = data);
  }
}
