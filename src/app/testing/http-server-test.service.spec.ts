import { TestBed } from '@angular/core/testing';

import { HttpServerTestService } from './http-server-test.service';

describe('HttpServerTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpServerTestService = TestBed.get(HttpServerTestService);
    expect(service).toBeTruthy();
  });
});
