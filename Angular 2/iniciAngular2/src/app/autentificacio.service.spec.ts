import { TestBed, inject } from '@angular/core/testing';

import { AutentificacioService } from './autentificacio.service';

describe('AutentificacioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentificacioService]
    });
  });

  it('should be created', inject([AutentificacioService], (service: AutentificacioService) => {
    expect(service).toBeTruthy();
  }));
});
