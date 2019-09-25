import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';

import { HttpComponent } from './http/http.component';

import { BurgerComponent } from './burger/burger.component';
import { BurgerItemsComponent } from './burger/burger-items/burger-items.component';
import { BurgerDescriptionsComponent } from './burger/burger-descriptions/burger-descriptions.component';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'}, 
  {path: 'items', component: ItemsComponent},
  {path: 'http', component: HttpComponent},
  {path: 'burger', component: BurgerComponent},
  {path: 'burger-items', component: BurgerItemsComponent},
  {path: 'burger-descriptions', component: BurgerDescriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
