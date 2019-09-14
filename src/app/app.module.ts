import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { ItemsComponent } from './items/items.component';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { HttpComponent } from './http/http.component';
import { BurgerComponent } from './burger/burger.component';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemsComponent,
    ItemAddComponent,
    ItemListComponent,
    HttpComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
