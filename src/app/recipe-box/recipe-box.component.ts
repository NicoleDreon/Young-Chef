import { Component, OnInit } from '@angular/core';
import { RecipeBox } from '../interfaces/recipe-box';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css'],
})
export class RecipeBoxComponent implements OnInit {
  favorites: RecipeBox[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.favorites = this.recipeService.getFavorites();
  }
}
