import { Component, OnInit } from '@angular/core';
import { RecipeBox } from '../interfaces/recipe-box';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css'],
})
export class FavoriteRecipeComponent implements OnInit {
  favorites: RecipeBox[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.favorites = this.recipeService.getFavorites();
    console.log(this.favorites);
  }

  getFavorites = () => {
    this.favorites = this.recipeService.getFavorites();
  };
} //
