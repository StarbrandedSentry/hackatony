import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Observable<Item[]>;
  itemCollection: AngularFirestoreCollection<Item>;

  constructor(public afs: AngularFirestore) { 
    this.itemCollection = this.afs.collection('item', ref => ref.orderBy('name', 'asc'));
  }
}
