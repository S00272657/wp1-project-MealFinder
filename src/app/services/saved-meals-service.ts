import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { signal } from '@angular/core';
import { Meal, SavedMeal } from '../interfaces/meal';
import { take } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SavedMealsService {

  private _http = inject(HttpClient)
  //private _apiUrl = "http://localhost:5050/meals";
  private _apiUrl = environment.apiUrl;

  public savedMeals = signal<SavedMeal[]>([])

  // ----- METHODS ------

  getMeals() {
    const url = this._apiUrl;
    this._http.get<SavedMeal[]>(url)
      .subscribe(data => {
        this.savedMeals.set(data);
      });
  }

saveMeal(idMeal: string) {
  //url to fetch the meal before we save it
  //we do this because not always can we pass the full meal object in the input
  // so to make sure our saved meal is not missing any fields, we fetch the full meal first
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal;

  this._http.get<any>(url)
    .pipe(take(1))
    .subscribe(data => {
      //fullMeal is the result
      let fullMeal = data.meals[0];
      //now post that result to db to save it
      this._http.post(this._apiUrl, fullMeal)
        .subscribe(() => {
          //refresh the array
          this.getMeals();
          console.log('Meal saved');
        });
    });
}

  removeMeal(myId: string) {
    const url = this._apiUrl + '/' + myId;
    this._http.delete(url)
      .subscribe(data => {
        this.getMeals();
        console.log('Meal removed');
      });
  }
}
