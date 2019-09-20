import { Component, OnInit,Inject } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemsService} from '../../shared/items.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  name: string;
 id :string;
  item: Item = {
    name: '',
    description: ''
  }
  constructor(public itemService:ItemsService ,  @Inject(MAT_DIALOG_DATA) public data: any) {
    
   }

  ngOnInit() {
    console.log("happiness");
    console.log(this.data);
    this.id = this.data.id;
    console.log("id is:"+this.id);
  }
  editItem(){
    if(!this.item.name || !this.item.description){
      return;
    }
    this.item.date_added = new Date();
    this.itemService.editItem(this.id,this.item.name,this.item.description);

    
  }

}
