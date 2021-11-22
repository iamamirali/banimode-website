import { TestBed } from '@angular/core/testing';

import { StateProccessService } from './state-proccess.service';

describe('StateProccessService', () => {
  let service: StateProccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateProccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
