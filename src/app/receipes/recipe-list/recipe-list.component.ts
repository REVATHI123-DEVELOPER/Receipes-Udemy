import { Component,OnDestroy,OnInit,} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements  OnDestroy{
  // @Output() recipewasselected = new EventEmitter<Recipe>();
  recipes:Recipe[];
  recipe:Recipe;
  subscription:Subscription;
 
  constructor(private recipeservice:RecipeService,private router:Router,private route:ActivatedRoute){

  }
  ngOnDestroy(){
    // throw new Error('Method not implemented.');
    this.subscription.unsubscribe();
  }

  ngOnInit(){
    this.subscription=this.recipeservice.recipeschanged
    .subscribe(
      (recipes:Recipe[]) => {
this.recipes=recipes;
      }
    );
    // this.recipes=this.recipeservice['emit'](Recipe);
    this.recipes=this.recipeservice.getrecipes();
  }


// onrecipeselected(recipe:Recipe){
//   this.recipewasselected.emit(recipe);
// }
onnewrecipe(){
this.router.navigate(['new'],{relativeTo:this.route});



}
}
