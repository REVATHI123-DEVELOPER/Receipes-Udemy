import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  // [x: string]: any;
  nameModel:any;
// names:ListOf[];




ingredients:Ingredient[];
private igChangeSub:Subscription;
constructor(private slservice:ShoppingListService){}
  ngOnDestroy(): void {
   this.igChangeSub.unsubscribe();
  }

ngOnInit(){
this.ingredients=this.slservice.getingredients();
this.igChangeSub=this.slservice.ingredientschanged
.subscribe(
  (ingredients:Ingredient[])=>{
          this.ingredients=ingredients;
  })
  // console.log(this.ingredients)

}

onSubmit() {
  this.ingredients.push(this.nameModel)
  console.log(this.ingredients);
  this.nameModel = '';
  return this.ingredients;
  // console.log(this.ingredients)
}
onedititem(index:number){
  this.slservice.startedediting.next(index);

}

}
