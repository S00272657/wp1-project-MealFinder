import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { take } from 'rxjs';
import { Meal } from '../interfaces/meal';

@Injectable({
  providedIn: 'root',
})
export class MealsApiService {

  private _http = inject(HttpClient)
  private _baseUrl = "https://www.themealdb.com/api/json/v1/1/";

  public meal = signal<Meal | null>(null);
  public meals = signal<Meal[]>([]);

  public categories = signal<any[]>([]);
  public categoryMeals = signal<any[]>([]);

  currentSearch= signal('');

  //METHODS:

  // main search endpoint - returns a list of meals that match query
  // called by search component on search to look upp meals
  searchMeals(query: string) {

    this.currentSearch.set(query);

    const url = this._baseUrl + "search.php?s=" + query;

    this._http.get<any>(url)
      .pipe(
        take(1)
      )
        .subscribe(data => {
          this.meals.set(data.meals || []);

          console.log(this.meals());
        });
  }

  // passed meal id, returns full meal details
  // properties: idCategory, strCategory, strCategoryThumb, strCategoryDescription
  // called by meal-details component on load to when user selects 'view details' on a meal
  getMealById(id: string) {
  const url = this._baseUrl + "lookup.php?i=" + id;

  this._http.get<any>(url)
    .pipe(take(1))
    .subscribe(data => {
      this.meal.set(data.meals[0]);
      console.log(this.meal());
    });
}

  // returns a list of categories you can filter meals by
  // properties: idCategory, strCategory, strCategoryThumb, strCategoryDescription
  // called by browse component on load to display different catoegry cards
  getCategories() {

    const url = this._baseUrl + "categories.php";

    this._http.get<any>(url)
      .pipe(
        take(1)
      )
        .subscribe(data => {
          this.categories.set(data.categories || []);

          console.log(this.categories());
        });
  }

  // returns a list of meals filtered by a category 
  // properties: strMeal, strMealThumb, idMeal
  // called by category-meals component on load when user clicks into a category
  filterByCategory(category: string) {
  const url = this._baseUrl + "filter.php?c=" + category;

  this._http.get<any>(url)
    .pipe(take(1))
    .subscribe(data => {
      this.categoryMeals.set(data.meals || []);
      console.log(this.categoryMeals());
    });
}


  getRandomMeal() {
  const url = this._baseUrl + "random.php";
    // clear current search 
  this.currentSearch.set('');

  this._http.get<any>(url)
    .pipe(take(1))
    .subscribe(data => {
      this.meals.set(data.meals || []);
      console.log(this.meals());
    });
}
}




