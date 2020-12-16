import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeBox } from './interfaces/recipe-box';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  searchURL: string = 'https://api.spoonacular.com/recipes/complexSearch';
  ingredientURL: string = 'https://api.spoonacular.com/recipes/id/information';
  randomURL: string = 'https://api.spoonacular.com/recipes/random';
  triviaURL: string = 'https://api.spoonacular.com/food/trivia/random';

  // apiKey: string = '7ed03fd3e48b465985205b580d3d8763'; // Phil
  // apiKey: string = '1e0e6ac413064d44ad1312d4c942f92a'; // Leslie
  // apiKey: string = '64b2bbdba0214d90aa607e25138b53e8'; // Nicole
  // apiKey: string = 'ed4e188160314292ab3ffe3a174eec84'; // Kyle
  apiKey: string = 'b2bd2bc172c74f2cadc8befb3201513e'; //kyle2
  // apiKey: string = '49fd1627458b4a2284c2a4ba1e72a698'; // Leslie2
  // apiKey: string = '8fcd393b4f8148959ad1a8c9064eb2c2'; // Phil 2

  // uniqueTools: any[] = [];

  favorites: RecipeBox[] = [];
  constructor(private http: HttpClient) {}

  getRecipe = (searchTerm: string): any => {
    return this.http.get(this.searchURL, {
      params: {
        apiKey: this.apiKey,
        query: searchTerm,
        addRecipeInformation: 'true',
        number: '3',
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
          defaultCss: 'true',
        },
      }
    );
    // this.getRecipeEquipment.
  }; // End of getRecipeEquipment function

  getTrivia = (): any => {
    return this.http.get(this.triviaURL, {
      params: {
        apiKey: this.apiKey,
      },
    });
  }; // end of trivia

  editFavorites = (favorite: RecipeBox) => {
    const index = this.favorites.findIndex((item) => {
      return item.id === favorite.id;
    });
    if (index === -1) {
      this.favorites.push(favorite);
    } else {
      this.favorites.splice(index, 1);
    }
    console.log(this.favorites);
  };

  getFavorites = () => {
    return this.favorites;
  };

  getRandomRecipe = (): any => {
    return this.http.get(this.randomURL, {
      params: {
        apiKey: this.apiKey,
        number: '6',
      },
    });
  }; // End of getRandomRecipe
} // End of export
