import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  randomRecipe: any | null = null;
  trivia: any | null;
  counter: number = 0;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.getRandomRecipe();
  }

  clickRecipe = (id: number): void => {
    this.router.navigate(['/recipe'], {
      queryParams: {
        id: id,
      },
    });
    console.log(id);
  };

  getRandomRecipe = () => {
    this.recipeService.getRandomRecipe().subscribe(
      (res: any) => {
        this.randomRecipe = res.recipes;
        this.getTrivia();
      },
      (error: any) => {
        this.recipeService.changeApiKey();
        this.recipeService.getRandomRecipe().subscribe((res: any) => {
          this.randomRecipe = res.recipes;
          this.getTrivia();
        }),
          (error: any) => {
            this.recipeService.changeApiKey();
            this.recipeService.getRandomRecipe().subscribe((res: any) => {
              this.randomRecipe = res.recipes;
              this.getTrivia();
            });
          },
          (error: any) => {
            this.recipeService.changeApiKey();
            this.recipeService.getRandomRecipe().subscribe((res: any) => {
              this.randomRecipe = res.recipes;
              this.getTrivia();
            });
          },
          (error: any) => {
            this.recipeService.changeApiKey();
            this.recipeService.getRandomRecipe().subscribe((res: any) => {
              this.randomRecipe = res.recipes;
              this.getTrivia();
            });
          },
          (error: any) => {
            this.recipeService.changeApiKey();
            this.recipeService.getRandomRecipe().subscribe((res: any) => {
              this.randomRecipe = res.recipes;
              this.getTrivia();
            });
          },
          (error: any) => {
            this.recipeService.changeApiKey();
            this.recipeService.getRandomRecipe().subscribe((res: any) => {
              this.randomRecipe = res.recipes;
              this.getTrivia();
            });
          };
      }
    );
  };

  getTrivia = () => {
    this.recipeService.getTrivia().subscribe(
      (trivia: any) => {
        this.trivia = trivia;
        console.log(trivia);
      },
      (error: any) => {
        this.recipeService.changeApiKey();
      }
    );
  };
}
