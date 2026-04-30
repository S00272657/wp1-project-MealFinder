import { Component } from '@angular/core';
import { MealsApiService } from '../../services/meals-api-service';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SavedMealsService } from '../../services/saved-meals-service';
 

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
    mealService = inject(MealsApiService)

    savedMealService = inject(SavedMealsService)

  //on load it gets savedMealService to fetch saved meals from db so that it can check if meals are saved already
  ngOnInit() {
    this.savedMealService.getMeals();
  }
  // boolean to check if a meal has been saved already or not
  isSaved(idMeal: string): boolean {
    return this.savedMealService.savedMeals().some(m => m.idMeal === idMeal);
  }

}
