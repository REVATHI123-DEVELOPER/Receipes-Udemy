import { Component,} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipe:Recipe;
  // recipe: Recipe = {} as Recipe;

id:number;

constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router){

}

ngOnInit(){
  // const id=this.route.snapshot.params['id'];
this.route.params
.subscribe(
  (params:Params)=>{
this.id=+params['id'];
this.recipe=this.recipeService.getrecipe(this.id);
  }
);

}

onaddshop(){
this.recipeService.oningredientstoshoplist(this.recipe.ingredients);
}
oneditrecipe(){
// this.router.navigate(['edit'],{relativeTo:this.route})
this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
}


ondeleterecipe(){
  this.recipeService.deleterecipe(this.id);
}


// get cartUser() 
// { return (Recipe && Recipe) ? this.recipe: null }

}
