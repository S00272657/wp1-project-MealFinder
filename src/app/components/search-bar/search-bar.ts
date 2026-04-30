import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { MealsApiService } from '../../services/meals-api-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {

  mealService = inject(MealsApiService);

  searchQuery: string = '';

  onSearch() {
    this.mealService.searchMeals(this.searchQuery);
  }

  onSurpriseMe() {
    this.mealService.getRandomMeal();
    this.searchQuery = '';
  }

  onClear() {
    this.searchQuery = '';
    this.mealService.meals.set([]);
    this.mealService.currentSearch.set('');
  }

}
