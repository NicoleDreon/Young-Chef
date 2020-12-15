import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CookingVideosComponent } from './cooking-videos/cooking-videos.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeBoxComponent } from './recipe-box/recipe-box.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { TheBasicsComponent } from './the-basics/the-basics.component';

const routes: Routes = [
  { path: 'search_recipes', component: SearchRecipesComponent },
  { path: 'the_basics', component: TheBasicsComponent },
  { path: 'recipe_box', component: RecipeBoxComponent },
  { path: 'cooking_videos', component: CookingVideosComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
