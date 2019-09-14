import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  retard: string = 'SUNSHINE';
  items: Item[];
  constructor(public itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => {
        this.itemService.recoveredItems = items;
    });
  }

}
