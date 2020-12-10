import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeBox } from '../interfaces/recipe-box';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css'],
})
export class FavoriteRecipeComponent implements OnInit {
  favorites: RecipeBox[] = [];
  @Input() recipeInfo: any;
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites = () => {
    this.favorites = this.recipeService.getFavorites();
  };

  removeFavorite = (recipe: RecipeBox): void => {
    this.recipeService.editFavorites(recipe);
    this.getFavorites();
  };

  clickRecipe = (id: number): void => {
    this.router.navigate(['/recipe'], {
      queryParams: {
        id: id,
      },
    });
    console.log(id);
  };
}
