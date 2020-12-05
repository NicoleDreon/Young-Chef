import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  searchURL: string = 'https://api.spoonacular.com/recipes/complexSearch';
  ingredientURL: string = 'https://api.spoonacular.com/recipes/';
  apiKey: string = '7ed03fd3e48b465985205b580d3d8763';

  constructor(private http: HttpClient) {}

  getRecipe = (searchTerm: string): any => {
    return this.http.get(this.searchURL, {
      params: {
        apiKey: this.apiKey,
        query: searchTerm,
        addRecipeInformation: 'false',
      },
    });
  };

  getRecipeIngredients = (id: number): any => {
    return this.http.get(`${this.ingredientURL}${id}/ingredientWidget.json`);
  };
}
