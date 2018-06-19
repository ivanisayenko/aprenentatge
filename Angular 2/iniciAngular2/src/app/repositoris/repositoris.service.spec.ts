import { TestBed, inject } from '@angular/core/testing';

import { RepositorisService } from './repositoris.service';

describe('RepositorisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositorisService]
    });
  });

  it('should be created', inject([RepositorisService], (service: RepositorisService) => {
    expect(service).toBeTruthy();
  }));
});
