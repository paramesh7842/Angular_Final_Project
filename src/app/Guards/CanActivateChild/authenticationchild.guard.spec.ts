import { TestBed } from '@angular/core/testing';

import { AuthenticationchildGuard } from './authenticationchild.guard';

describe('AuthenticationchildGuard', () => {
  let guard: AuthenticationchildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationchildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
