import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/items.component';

import { HttpComponent } from './http/http.component';

import { BurgerComponent } from './burger/burger.component';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'}, 
  {path: 'items', component: ItemsComponent},
  {path: 'http', component: HttpComponent},
  {path: 'burger', component: BurgerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
