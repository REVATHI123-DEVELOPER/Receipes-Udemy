import { Injectable } from "@angular/core";
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot, ResolveData} from '@angular/router';
import { Recipe } from "../receipes/recipe.model";

import { DataStorageService } from "../shared/data-storage.service";
import { provideCloudflareLoader } from "@angular/common";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})
// export class RecipeResolverService implements Resolve<Recipe[]>{
//     constructor(private datastorageservice:DataStorageService,private recipesService:RecipeService){}
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const receipes=this.recipesService.getrecipes();

//         if(receipes.length==0){
//             return this.datastorageservice.fetchrecipes();
  
//         }
//         else{
//             return receipes;
//         }
//     }

// }


export class RecipeResolverService implements  Resolve<Recipe[]>{
        constructor(private datastorageservice:DataStorageService,private recipesService:RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const receipes=this.recipesService.getrecipes();

                if(receipes.length==0){
                    return this.datastorageservice.fetchrecipes();
          
                }
                else{
                    return receipes;
                }
    }

}