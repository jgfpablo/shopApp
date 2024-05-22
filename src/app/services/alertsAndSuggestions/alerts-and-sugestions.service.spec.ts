import { TestBed } from '@angular/core/testing';

import { AlertsAndSugestionsService } from './alerts-and-sugestions.service';

describe('AlertsAndSugestionsService', () => {
  let service: AlertsAndSugestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsAndSugestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
