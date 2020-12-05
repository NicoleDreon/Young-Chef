import { RecipeService } from '../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipeID: number | null = null;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let id = response.get('id');
      if (id) {
        this.recipeService.getRecipe(id).subscribe((res: any) => {
          this.recipeID = res;
        });
      } else {
        console.log('no term');
      }
    });
  }
}
