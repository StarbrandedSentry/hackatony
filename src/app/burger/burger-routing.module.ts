import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerItemsComponent } from './burger-items/burger-items.component';
import { BurgerDescriptionComponent } from './burger-description/burger-description.component';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'burger-items', component: BurgerItemsComponent},
  {path: 'burger-description', component: BurgerDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
