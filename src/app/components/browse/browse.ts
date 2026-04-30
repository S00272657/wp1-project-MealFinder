import { Component } from '@angular/core';
import { MealsApiService } from '../../services/meals-api-service';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-browse',
  imports: [RouterLink],
  templateUrl: './browse.html',
  styleUrl: './browse.css',
})
export class Browse {
  mealService = inject(MealsApiService)

  ngOnInit() {
  this.mealService.getCategories();
  }

}
