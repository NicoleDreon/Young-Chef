import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css'],
})
export class SearchRecipesComponent implements OnInit {
  showRecipes: any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let searchTerm = response.get('term');
      if (searchTerm) {
        this.recipeService.getRecipe(searchTerm).subscribe((res: any) => {
          console.log(res);
        });
      } else {
        console.log('no search term'); //trending?
      }
    });
  }

  searchRecipes = (form: NgForm): void => {
    this.router.navigate(['/search_recipes'], {
      queryParams: {
        term: form.value.recipeSearch,
      },
    });
    console.log(form.value);
  };
}