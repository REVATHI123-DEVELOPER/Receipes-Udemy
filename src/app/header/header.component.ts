
import {Component, EventEmitter,Output} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent{
// @Output() featureselected = new EventEmitter<string>();
constructor(private datastorageservice:DataStorageService){}
onsavedata(){
this.datastorageservice.storeRecipes();
}

onfetchdata(){
    this.datastorageservice.fetchrecipes().subscribe();
}
onfetchdat(){
    this.datastorageservice.fetchrecipes();
    // console.log(fetchrec    ip)
}
    

}