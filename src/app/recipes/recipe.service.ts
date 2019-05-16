import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', ' This is simply a test', 'https://proxy.duckduckgo.com/' +
      'iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F09%2F12%2F21%2F43%2Fpotato-salad-2743776_640.jpg&f=1'),
    new Recipe('Another test recipe', ' This is simply a test', 'https://proxy.duckduckgo.com/' +
      'iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F09%2F12%2F21%2F43%2Fpotato-salad-2743776_640.jpg&f=1')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
