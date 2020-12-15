import { RecipeService } from '../recipe.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeBox } from '../interfaces/recipe-box';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipeInfo: any | null = null;
  recipeTools: any | null = null;
  uniqueTools: any[] = [];
  favorites: RecipeBox[] = [];
  recipe: any | null;
  isFavorite: boolean = false;
  @Output() favoriteEvent = new EventEmitter<RecipeBox>();
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let id = response.get('id');
      if (id) {
        this.recipeService
          .getRecipeIngredients(parseInt(id))
          .subscribe((res: any) => {
            this.recipeInfo = res;
            console.log(res);
            this.checkFavorites();
          }) &&
          this.recipeService
            .getRecipeEquipment(parseInt(id))
            .subscribe((res: any) => {
              this.recipeTools = res;
              console.log(this.recipeTools);
              this.getUniqueTools(this.recipeTools.equipment);
            });
      } else {
        console.log('no term');
      }
    });
    this.favorites = this.recipeService.getFavorites();
  } // End of on init //

  getUniqueTools = (toolsArray: any[]) => {
    toolsArray.forEach((item: any) => {
      console.log(item);
      if (!this.uniqueTools.includes(item.name)) {
        this.uniqueTools.push(item.name);
        // this.uniqueTools.push(item.image);
      }
    });
    console.log(this.uniqueTools);
  }; // End of getUniqueTools//

  toggleFavorites = () => {
    let favoriteRecipe: RecipeBox = {
      id: this.recipeInfo.id,
      image: this.recipeInfo.image,
      title: this.recipeInfo.title,
      // difficultyRating: ,
      // numIngredients: ,
      time: this.recipeInfo.readyInMinutes,
      servings: this.recipeInfo.servings,
      tools: this.uniqueTools,
      instructions: this.recipeInfo.analyzedInstructions,
      originalLink: this.recipeInfo.sourceUrl,
      isFavorite: false,
    };
    console.log(favoriteRecipe);
    // this.favoriteEvent.emit(favoriteRecipe);
    this.recipeService.editFavorites(favoriteRecipe);
    this.favorites = this.recipeService.getFavorites();
    this.checkFavorites();
  };

  checkFavorites = (): void => {
    this.isFavorite = this.favorites.some((item) => {
      return item.id === this.recipeInfo.id;
    });
  };
} // End of export //
