import { TestBed, inject } from '@angular/core/testing';

import { ProudctService } from './proudct.service';

describe('ProudctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProudctService]
    });
  });

  it('should be created', inject([ProudctService], (service: ProudctService) => {
    expect(service).toBeTruthy();
  }));
});
