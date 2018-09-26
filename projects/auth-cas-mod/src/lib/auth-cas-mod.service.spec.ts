import { TestBed, inject } from '@angular/core/testing';

import { AuthCasModService } from './auth-cas-mod.service';

describe('AuthCasModService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCasModService]
    });
  });

  it('should be created', inject([AuthCasModService], (service: AuthCasModService) => {
    expect(service).toBeTruthy();
  }));
});
