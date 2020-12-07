export interface RecipeBox {
  id: number;
  image: string;
  title: string;
  difficultyRating: string;
  numIngredients: number;
  time: string;
  servings: number;
  tools: string;
  instructions: string;
  originalLink: string;
  isFavorite: boolean;
}
