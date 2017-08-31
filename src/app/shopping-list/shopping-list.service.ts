import {Ingredient} from '../shared/ingredient.model'
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];


  getIngredient(index: number) {
    return this.ingredients[index];
  }


  addIngredients(ingredients: Ingredient[]) {
    /*for (let ingredient of ingredients) {
     this.addIngredient(ingredient);
     }*/
    this.ingredients.push(...ingredients);                    // ... ES6 spread operator converts array to list of objects
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
