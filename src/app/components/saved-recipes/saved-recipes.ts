import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { SavedMealsService } from '../../services/saved-meals-service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-saved-recipes',
  imports: [RouterLink],
  templateUrl: './saved-recipes.html',
  styleUrl: './saved-recipes.css',
})
export class SavedRecipes {
  savedMealService = inject(SavedMealsService)

    ngOnInit() {
    this.savedMealService.getMeals();
  }
}
