import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from '../shared/items.service';
import { MatDialog } from '@angular/material';
import { ItemEditComponent } from '../dialogs/item-edit/item-edit.component';
import { ItemEditService } from '../shared/item-edit.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  retard: string = 'SUNSHINE';
  items: Item[];
  numberOfItems:Number;
  constructor(public itemService: ItemsService, public ed: ItemEditService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => {
        this.itemService.recoveredItems = items;
        this.numberOfItems=this.itemService.recoveredItems.length;
    });
 
  }
  deleteItem(id:string){
    this.itemService.deleteItem(id);
    console.log(id);
  }

  showEdit(id:string){
    this.ed.openEditDialog(id);
    console.log(id);
  }


}
