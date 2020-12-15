import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { TheBasicsComponent } from './the-basics/the-basics.component';
import { CookingVideosComponent } from './cooking-videos/cooking-videos.component';
import { RecipeBoxComponent } from './recipe-box/recipe-box.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavoriteRecipeComponent } from './favorite-recipe/favorite-recipe.component';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchRecipesComponent,
    TheBasicsComponent,
    CookingVideosComponent,
    RecipeBoxComponent,
    RecipeComponent,
    FooterComponent,
    PageNotFoundComponent,
    SearchResultComponent,
    FavoriteRecipeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    SliderModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
