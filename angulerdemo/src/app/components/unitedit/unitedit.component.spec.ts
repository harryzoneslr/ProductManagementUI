import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteditComponent } from './unitedit.component';

describe('UniteditComponent', () => {
  let component: UniteditComponent;
  let fixture: ComponentFixture<UniteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
