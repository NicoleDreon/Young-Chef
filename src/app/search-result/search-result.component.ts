import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeBox } from '../interfaces/recipe-box';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  @Input() recipe: any;
  // @Input() recipeInfo: any | null;
  // @Input() uniqueTools: any[] = [];
  favorites: RecipeBox[] = [];
  val: number | null = null;
  val2: number | null = null;
  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.favorites = this.recipeService.getFavorites();
  }

  clickRecipe = (id: number): void => {
    this.router.navigate(['/recipe'], {
      queryParams: {
        id: id,
      },
    });
    console.log(id);
  };

  //uses service 'editFavorites' to place recipe into favorites
  toggleFavorites = () => {
    this.recipeService.editFavorites(this.recipe);
  };
} // End of export
