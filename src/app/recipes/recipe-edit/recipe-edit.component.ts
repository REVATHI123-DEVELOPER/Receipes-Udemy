import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,ControlValueAccessor } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/receipes/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent {
  id:number;
  recipe:Recipe;
  editMode=false;
  recipeForm:FormGroup;
  messageSuccess = true;

  constructor(private route:ActivatedRoute,
    private recipeService:RecipeService,private router:Router){

  }
  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
        // console.log(this.editMode);

      }
    );

  }

  onsubmit(){
    // const newRecipe=new Recipe(this.recipeForm.value['name'],
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imagepath'],
    // this.recipeForm.value['ingredients']);
    // console.log(this.recipeForm)
    if(this.editMode){
      this.recipeService.updaterecipe(this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addrecipe(this.recipeForm.value);
    }
    this.oncancel();
    console.log(this.oncancel());
  }


  oncancel(){
this.router.navigate(['../'],{relativeTo:this.route})
// setTimeout(this.subscribeToHeartbeat(callbackfn), 1000);
setTimeout(()=>{                           // <<<---using ()=> syntax
    this.messageSuccess = false;
}, 3000);
console.log(this.oncancel())
  }
  // get recipeForm(){
  //   return this.recipeForm.get('ingredients') as FormArray
  //   }

  onaddingredient(){
(<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount' : new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        // return this.recipeForm.get('ingredients') as FormArray

      }),
      

    )
    
  }
  ondeleteingredient(index:number){
   ( <FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
  
  // return this.forms.get('topics') as FormArray;



  
  
  

  private initForm(){
    // const recipe=this.recipeService.getrecipe(this.id)
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredients=new FormArray([])
    if(this.editMode){
      const recipe=this.recipeService.getrecipe(this.id)

      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount' :  new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'Description':new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients
    })
  }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  

}
