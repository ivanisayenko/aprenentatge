import { TestBed, async, inject } from '@angular/core/testing';

import { AutentGuard } from './autent.guard';

describe('AutentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentGuard]
    });
  });

  it('should ...', inject([AutentGuard], (guard: AutentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
