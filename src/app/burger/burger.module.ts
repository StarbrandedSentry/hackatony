import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerItemsComponent } from './burger-items/burger-items.component';
import { BurgerDescriptionComponent } from './burger-description/burger-description.component';



@NgModule({
  declarations: [
    BurgerItemsComponent, 
    BurgerDescriptionComponent

  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    BurgerItemsComponent,
    BurgerDescriptionComponent
  ]
})
export class BurgerModule { }
