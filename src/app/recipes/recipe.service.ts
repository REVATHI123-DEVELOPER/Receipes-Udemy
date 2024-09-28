import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../receipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 recipeschanged=new Subject<Recipe[]>();
// private recipes:Recipe[]
// key:string = "recipes";
// recipes = [
//   {
    
//   }
//  ];

//  ngOnInit() {}

// private recipes:Recipe[]=[]
 public  recipes:Recipe[]=[
  
    new Recipe('Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_Iq4Fo80aWVyK3BA_dxwDYyoiVmZHf4DHg&usqp=CAU',[
      new Ingredient('MEAT',20),
      new Ingredient('french',20)
    ]),
    new Recipe('Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_Iq4Fo80aWVyK3BA_dxwDYyoiVmZHf4DHg&usqp=CAU',[
      new Ingredient('samosa',15),
      new Ingredient('gilebi',30)
    ])

  ];
// private recipes = new Recipe<any>();

  constructor(private slservice:ShoppingListService) { }

  setrecipes(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipeschanged.next(this.recipes.slice());
  }

  getrecipes(){
    return this.recipes.slice();
  }

  getrecipe(index:number){
    return this.recipes[index]
  }

  oningredientstoshoplist(ingredients:Ingredient[]){
    this.slservice. addingredients(ingredients)

  }


  addrecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipeschanged.next(this.recipes.slice())
  }
  updaterecipe(index:number,newRecipe:Recipe
    ){
this.recipes[index]=newRecipe;
this.recipeschanged.next(this.recipes.slice())

    }


    deleterecipe(index:number){
      this.recipes.splice(index,1);
      this.recipeschanged.next(this.recipes.slice())
    }
}
