import { TestBed } from '@angular/core/testing';

import { OctavioService } from './octavio.service';

describe('OctavioService', () => {
  let service: OctavioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctavioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
