import { Component, Input, OnInit, Output } from '@angular/core';
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
  recipeData: any | null = null;
  recipeID: number | null = null;
  @Input() recipeRef: any;
  minutesVal: number | null = 90;
  val2: number | null = null;
  minutesObject: any | null = null;
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
          this.recipeData = res.results;
          console.log(res);
        });
      } else {
        this.recipeService.getRandomRecipe().subscribe((res: any) => {
          this.recipeData = res.recipes;
          console.log(res);
        });
        console.log('no search term'); //trending?
      }
    });
  } // End of ngOnInit

  searchRecipes = (form: NgForm): void => {
    this.router.navigate(['/search_recipes'], {
      queryParams: {
        term: form.value.recipeSearch,
      },
    });
    console.log(form.value);
  };

  //create interface later for filterObject
  filterRecipes = () => {
    if (!this.minutesObject) {
      return this.recipeData;
    } else {
      return this.recipeData.filter((recipe: any) => {
        return recipe.readyInMinutes <= this.minutesObject.value;
      });
    }
  };

  setNumberOfMinutes = (value: number) => {
    console.log(value);
    this.minutesObject = {
      type: 'minutes',
      value: value,
    };
    this.filterRecipes();
  };

  // let newArray = this.recipeData.filter((item)=>{
  //   if(item.readyInMinutes <= this.minutesVal){
  //     return item;
  //   }
  //   console.log(newArray)
  // })
  // filterCookTime = (array: ShowRecipes[], cookTime: number) => {
  //    return cookTime = this.recipeData.readyInMinutes
  //   if(cookTime > this.val!){
  //     let filtered =
  //     return this.getRecipe()
  //   }
  // };
} // End of export
