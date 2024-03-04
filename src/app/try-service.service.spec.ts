import { TestBed } from '@angular/core/testing';

import { TryServiceService } from './try-service.service';

describe('TryServiceService', () => {
  let service: TryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
