import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService} from '../shared/items.service';


@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {
  name: string;
  description: string;
  item: Item = {
    name: '',
    description: ''
  }

  constructor(public itemService:ItemsService) { 
    
  }

  ngOnInit() {
  
  }
  onKey(event: KeyboardEvent) { // with type info
    if (event.key === "Enter") {
    this.addItem();
    }
  }
 
  addItem(){
    if(!this.item.name || !this.item.description){
      return;
    }
    
    this.item.date_added = new Date();
    this.itemService.addItem(this.item);

    this.item.name = '';
    this.item.description = '';
  }

}
