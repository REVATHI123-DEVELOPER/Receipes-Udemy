import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './receipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';

const routes: Routes = [
  {path:'',redirectTo:'/receipes',pathMatch:'full'},
 {path:'receipes',
 component:RecipesComponent,
 children:[
  {path:'receipes',component:RecipesComponent},
  {path:'',component:RecipeStartComponent},
 {path:'new',component:RecipeEditComponent},
 {
  path:':id',
 component:RecipeDetailComponent,
 resolve:[RecipeResolverService]
},

 {path:':id/edit',
 component:RecipeEditComponent,
 resolve:[RecipeResolverService]
},
]
},

 {path:'shopping-list',component:ShoppingListComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
