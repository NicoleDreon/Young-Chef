import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {}

  clickRecipe = (id: number): void => {
    this.router.navigate(['/recipe'], {
      queryParams: {
        id: id,
      },
    });
    console.log(id);
  };

  //uses service 'editFavorites' to place recipe into favoritesz
  toggleFavorites = () => {
    this.recipeService.editFavorites(this.recipe);
  };
}
