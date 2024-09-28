import { EventEmitter, Injectable, IterableChangeRecord } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // ingredients:Ingredient[]=[]
  ingredientschanged=new Subject<Ingredient[]>();
  startedediting=new Subject<number>();
 private  ingredients:Ingredient[]=[
    new Ingredient('apples',5),
    new Ingredient('apples',6)

  ]


  getingredients(){
    return this.ingredients.slice();
  }


  getIngredient(index:number){
    return this.ingredients[index];
  }
  constructor() { }

  addingredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    // console.log(ingredient)
    // console.log(Ingredient)
    this.ingredientschanged.next(this.ingredients.slice());
  }

  addingredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients)
    console.log(...ingredients)
    this.ingredientschanged.next(this.ingredients.slice())
  }


  updateingredient(index:number,newingredient:Ingredient){
    this.ingredients[index]=newingredient;
    this.ingredientschanged.next(this.ingredients.slice());

  }

  deleteingredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientschanged.next(this.ingredients.slice())
  }

}
