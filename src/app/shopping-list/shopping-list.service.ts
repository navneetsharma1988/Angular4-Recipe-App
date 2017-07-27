import {Ingredient} from '../shared/ingredient.model'
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();              // return the copy of original array
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...ingredients);                    // ... ES6 spread operator converts array to list of objects
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
