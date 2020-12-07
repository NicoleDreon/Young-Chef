import { RecipeService } from '../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipeInfo: any | null = null;
  recipeTools: any | null = null;
  uniqueTools: any[] = [];
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
          }) &&
          this.recipeService
            .getRecipeEquipment(parseInt(id))
            .subscribe((res: any) => {
              this.recipeTools = res;
            });
      } else {
        console.log('no term');
      }
    });
  } // End of on init //
} // End of export //
