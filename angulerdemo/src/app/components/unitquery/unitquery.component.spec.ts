import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitqueryComponent } from './unitquery.component';

describe('UnitqueryComponent', () => {
  let component: UnitqueryComponent;
  let fixture: ComponentFixture<UnitqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
