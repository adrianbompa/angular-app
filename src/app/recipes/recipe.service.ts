import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {

  }

  private recipes: Recipe[] = [
    new Recipe('A test recipe', ' This is simply a test', 'https://proxy.duckduckgo.com/' +
      'iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F09%2F12%2F21%2F43%2Fpotato-salad-2743776_640.jpg&f=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Another test recipe', ' This is simply a test', 'https://proxy.duckduckgo.com/' +
      'iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F09%2F12%2F21%2F43%2Fpotato-salad-2743776_640.jpg&f=1',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }


}
