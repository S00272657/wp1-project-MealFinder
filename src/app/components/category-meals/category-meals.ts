import { Component } from '@angular/core';
import { MealsApiService } from '../../services/meals-api-service';
import { inject } from '@angular/core';
import { input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SavedMealsService } from '../../services/saved-meals-service';

@Component({
  selector: 'app-category-meals',
  imports: [RouterLink],
  templateUrl: './category-meals.html',
  styleUrl: './category-meals.css',
})
export class CategoryMeals {
  mealService = inject(MealsApiService);

  savedMealService = inject(SavedMealsService)

  protected category = input<any>();

  ngOnInit() {
    let categoryName = this.category();
    console.log('Category Name:', categoryName);
    this.mealService.filterByCategory(categoryName);

    //run savedMealService to update meals
    this.savedMealService.getMeals();
  }

  // boolean to check if a meal has been saved already or not
  isSaved(idMeal: string): boolean {
    return this.savedMealService.savedMeals().some(m => m.idMeal === idMeal);
  }

}
