import { TestBed, inject } from '@angular/core/testing';

import { NavegacioService } from './navegacio.service';

describe('RepositorisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavegacioService]
    });
  });

  it('should be created', inject([NavegacioService], (service: NavegacioService) => {
    expect(service).toBeTruthy();
  }));
});
