import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UnitField} from '../../entity/UnitField';
import {UniteditserviceService} from '../../service/uniteditservice.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-unitedit',
  templateUrl: './unitedit.component.html',
  styleUrls: ['./unitedit.component.css']
})
export class UniteditComponent implements OnInit {

  public uuid: number;
  public unitField: UnitField;
  constructor(private routeInfo: ActivatedRoute, private service: UniteditserviceService,  private router: Router){}

  ngOnInit(): void {
    this.uuid = this.routeInfo.snapshot.params.msg;
    this.unitField = this.getSpecificUnitField(this.uuid);
  }

  clickQuit(): void{
    this.router.navigate(['/query']);
  }
  saveUnitField(): void{
    this.service.saveUnitField(this.unitField as UnitField).subscribe();
  }
  getSpecificUnitField(uuid: number): UnitField{
    return this.service.getSpecificUnitField(uuid).subscribe(data => this.unitField = data);
  }
}
