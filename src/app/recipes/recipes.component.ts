import { Component } from '@angular/core';
import { Recipe } from '../receipes/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers:[RecipeService]
})
export class RecipesComponent {
selectedrecipe:Recipe;
// selectedrecipe=any[;]
constructor(){
  // console.log(RecipeService)

}
ngOnInit(){
}
}
