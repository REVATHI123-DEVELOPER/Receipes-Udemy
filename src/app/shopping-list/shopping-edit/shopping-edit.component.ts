import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
//  any;
@ViewChild('f') slForm:NgForm;
 //viewchild set parameter static:false
subscription:Subscription;
editMode=false;
editItemIndex:number;
editedItem:Ingredient
 
  Dist: any;


  constructor(private slservice:ShoppingListService){
 
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

  ngOnInit(){
   this.subscription= this.slservice.startedediting
    .subscribe(
      (index:number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem=this.slservice.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
        // this.editedItem=this.slservice.getingredients(index);

      }
    );

  }
  onsubmit(form:NgForm){
    const value=form.value
  
    const newingredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slservice.updateingredient(this.editItemIndex,newingredient);

    }
    else{

    
    this.slservice.addingredient(newingredient);
    console.log(newingredient)
    }
    this.editMode=false;
    form.reset();
    
        
  }

  onclear(){
    this.slForm.reset();
    this.editMode=false
  }

  ondelete(){
    this.slservice.deleteingredient(this.editItemIndex)
    this.onclear();
  }
}


