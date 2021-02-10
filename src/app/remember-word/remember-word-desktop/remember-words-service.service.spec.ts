import { TestBed } from '@angular/core/testing';

import { RememberWordsServiceService } from './remember-words-service.service';

describe('RememberWordsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RememberWordsServiceService = TestBed.get(RememberWordsServiceService);
    expect(service).toBeTruthy();
  });
});
