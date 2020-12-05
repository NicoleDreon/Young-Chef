import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: any;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.recipe = this.recipeService.getRecipe()
    console.log(this.recipe);
  }
}
