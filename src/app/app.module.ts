import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { ItemsComponent } from './items/items.component';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { HttpComponent } from './http/http.component';
import { BurgerComponent } from './burger/burger.component';
import { environment } from 'src/environments/environment.prod';

import { ItemsService } from './items/shared/items.service';
import { ItemEditComponent } from './items/dialogs/item-edit/item-edit.component';
import { BurgerItemsComponent } from './burger/burger-items/burger-items.component';
import { BurgerDescriptionsComponent } from './burger/burger-descriptions/burger-descriptions.component';
import { BurgerNavComponent } from './layout/burger-nav/burger-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemsComponent,
    ItemAddComponent,
    ItemListComponent,
    HttpComponent,
    BurgerComponent,
    ItemEditComponent,
    BurgerItemsComponent,
    BurgerDescriptionsComponent,
    BurgerNavComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent],
  entryComponents: [ItemEditComponent]
})
export class AppModule { }
