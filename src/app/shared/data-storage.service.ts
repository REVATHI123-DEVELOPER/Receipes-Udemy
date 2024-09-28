
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../receipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";
import { TaggedTemplateExpr } from "@angular/compiler";
@Injectable({providedIn:'root'})

export class DataStorageService{
    constructor(private http:HttpClient,private recipeService:RecipeService){}



    storeRecipes(){
const recipes=this.recipeService.getrecipes();
 this.http.put(
    'https://my-project-5cbfc-default-rtdb.firebaseio.com//recipes.json',
    recipes)

.subscribe(response=>{
    console.log(response);
})
    }



    fetchrecipes(){
        return this.http
        .get<Recipe[]>(  'https://my-project-5cbfc-default-rtdb.firebaseio.com/recipes.json',)
        .pipe(map(recipes => {
            return recipes.map(recipe => {
                return  {...recipe,ingredients:recipe.ingredients ? recipe.ingredients : []
                };
            });
        }),
        tap(recipes =>{
            this.recipeService.setrecipes(recipes);
            // console.log(recipes);
            // console.log(Recipe);

        })
        // console.log(recipes);
        )
        // console.log(Recipe);
      
    }

    // fetchrecipe(){
    //     this.http.get('https://fir-53093-default-rtdb.firebaseio.com/')
    //     .subscribe(recipes=>{
    //         console.log(this.fetchrecipe);
    //     })
    // }
}