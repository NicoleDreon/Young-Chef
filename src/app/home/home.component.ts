import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  randomRecipe: any | null = null;
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
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRandomRecipe().subscribe((res: any) => {
      this.randomRecipe = res.recipes;
      console.log(res);
      // this.loopRecipe();
    });
  }

  // loopRecipe = () => {
  //   for (let i = 0; i < this.randomRecipe.length; i++) {
  //     if (this.counter === this.randomRecipe.length) {
  //       this.counter = 0;
  //     } else {
  //       this.counter++;
  //     }
  //   }
  // };
  //   timeout = () => {
  //     setTimeout(() => {
  //       if (this.counter === this.randomRecipe.length) {
  //         this.counter = 0;
  //       } else {
  //         this.counter++;
  //       }
  //       this.timeout();
  //     }, 3000);
  //   };
}
