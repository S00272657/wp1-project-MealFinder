import { Routes } from '@angular/router';

import { SearchMeals } from './components/search-meals/search-meals';
import { SavedRecipes } from './components/saved-recipes/saved-recipes';
import { MealDetails } from './components/meal-details/meal-details';
import { About } from './components/about/about';
import { Browse } from './components/browse/browse';
import { CategoryMeals } from './components/category-meals/category-meals';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchMeals},
    { path: 'meal/:id', component: MealDetails},
    { path: 'saved', component: SavedRecipes},
    { path: 'about', component: About},
    { path: 'browse', component: Browse},
    { path: 'browse/:category', component: CategoryMeals }
];
