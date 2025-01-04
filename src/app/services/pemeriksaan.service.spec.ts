import { TestBed } from '@angular/core/testing';

import { PemeriksaanService } from './pemeriksaan.service';

describe('PemeriksaanService', () => {
  let service: PemeriksaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemeriksaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
