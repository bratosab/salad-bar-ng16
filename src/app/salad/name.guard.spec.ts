import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nameGuard } from './name.guard';

describe('nameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
