import { TestBed } from '@angular/core/testing';

import { UniteditserviceService } from './uniteditservice.service';

describe('UniteditserviceService', () => {
  let service: UniteditserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniteditserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
