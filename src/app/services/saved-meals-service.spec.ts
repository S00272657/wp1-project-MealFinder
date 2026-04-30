import { TestBed } from '@angular/core/testing';

import { SavedMealsService } from './saved-meals-service';

describe('SavedMealsService', () => {
  let service: SavedMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
