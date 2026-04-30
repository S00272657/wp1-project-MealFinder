import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { MealsApiService } from '../../services/meals-api-service';
import { input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.html',
  styleUrl: './meal-details.css',
})
export class MealDetails {
  mealService = inject(MealsApiService);

  protected id = input<any>();

  ingredientIndexes = Array.from({ length: 20 }, (_, i) => i + 1);

  ngOnInit() {
    let mealID = this.id();
    console.log('Meal ID:', mealID);
    this.mealService.getMealById(mealID);
  }

  constructor(private location: Location) { }
  
  backClicked() {
    this.location.back();
  }
}
