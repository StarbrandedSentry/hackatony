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
  addItem(){
    if(!this.item.name || !this.item.description){
      return;
    }
    this.itemService.addItem(this.item);
  }

}
