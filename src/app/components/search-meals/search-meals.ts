import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { Results } from '../results/results';

@Component({
  selector: 'app-search-meals',
  imports: [SearchBar, Results],
  templateUrl: './search-meals.html',
  styleUrl: './search-meals.css',
})
export class SearchMeals {

}
