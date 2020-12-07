import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  searchURL: string = 'https://api.spoonacular.com/recipes/complexSearch';
  ingredientURL: string = 'https://api.spoonacular.com/recipes/id/information';
  // apiKey: string = '7ed03fd3e48b465985205b580d3d8763'; // Phil
  apiKey: string = '1e0e6ac413064d44ad1312d4c942f92a'; // Leslie
  // apiKey: string = 'ed4e188160314292ab3ffe3a174eec84'; // Kyle
  // apiKey: string = '64b2bbdba0214d90aa607e25138b53e8'; // Nicole
  // uniqueTools: any[] = [];

  constructor(private http: HttpClient) {}

  getRecipe = (searchTerm: string): any => {
    return this.http.get(this.searchURL, {
      params: {
        apiKey: this.apiKey,
        query: searchTerm,
        addRecipeInformation: 'false',
      },
    });
  }; // End of getRecipe

  getRecipeIngredients = (id: number): any => {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        params: {
          apiKey: this.apiKey,
          includeNutrition: 'false',
        },
      }
    );
  }; // End of getRecipeIngredients

  getRecipeEquipment = (id: number) => {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/equipmentWidget.json`,
      {
        params: {
          apiKey: this.apiKey,
        },
      }
    );
    // this.getRecipeEquipment.
  }; // End of getRecipeEquipment function
} // End of export
