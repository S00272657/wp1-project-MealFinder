import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeals } from './search-meals';

describe('SearchMeals', () => {
  let component: SearchMeals;
  let fixture: ComponentFixture<SearchMeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMeals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
