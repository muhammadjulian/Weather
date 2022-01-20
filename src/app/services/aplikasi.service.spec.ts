import { TestBed } from '@angular/core/testing';

import { AplikasiService } from './aplikasi.service';

describe('AplikasiService', () => {
  let service: AplikasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplikasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
