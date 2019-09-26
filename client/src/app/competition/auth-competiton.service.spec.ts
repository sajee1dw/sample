import { TestBed } from '@angular/core/testing';

import { AuthCompetitonService } from './auth-competiton.service';

describe('AuthCompetitonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthCompetitonService = TestBed.get(AuthCompetitonService);
    expect(service).toBeTruthy();
  });
});
