import { TestBed } from '@angular/core/testing';

import { UnitfieldserviceService } from './unitfieldservice.service';

describe('UnitfieldserviceService', () => {
  let service: UnitfieldserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitfieldserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
