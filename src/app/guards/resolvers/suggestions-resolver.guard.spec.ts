import { TestBed } from '@angular/core/testing';

import { SuggestionsResolverGuard } from './suggestions-resolver.guard';

describe('SuggestionsResolverGuard', () => {
  let guard: SuggestionsResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuggestionsResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
