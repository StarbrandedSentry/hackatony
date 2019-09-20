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
  mess = {
    message1: 'not valid',
    message2: 'not valid'
  }
  description: string;
  item: Item = {
    name: '',
    description: ''
  }
  letter:string ="=";

  constructor(public itemService:ItemsService) { 
    
  }

  ngOnInit() {
  
  }
  reset(){
    this.letter="";
  }
  onKey(event: KeyboardEvent) { // with type info
    if (event.key === "Enter") {
    this.addItem();
    }
  
    this.letter+=event.key.toString();
    if(this.letter.length>4){
      this.mess.message1="valid";
    }
    
    console.log(this.letter);
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
