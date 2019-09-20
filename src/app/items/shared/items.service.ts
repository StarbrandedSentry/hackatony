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
  recoveredItems: Item[];
  itemCollection: AngularFirestoreCollection<Item>;

  constructor(public afs: AngularFirestore) { 
    this.itemCollection = this.afs.collection('item', ref => ref.orderBy('date_added', 'asc'));

    this.items = this.itemCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Item;
      data.id = a.payload.doc.id;

      return data;
    })));
  }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.itemCollection.add(item);
  }
  deleteItem(id:string){
    this.itemCollection.doc(id).delete();
  }
  editItem(id:string,name:string,description:string){
    this.itemCollection.doc(id).update({name:name,description:description});
  }

}
