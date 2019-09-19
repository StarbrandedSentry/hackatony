import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemEditComponent } from '../dialogs/item-edit/item-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ItemEditService {

  constructor(public dialog: MatDialog) { }

  dialogRef = this.dialog.open(ItemEditComponent, {
    height: '400px',
    width: '600px',
    panelClass: 'edit-dialog'
  });
}
