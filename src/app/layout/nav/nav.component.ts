import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        clipPath: 'inset(0 0 0 0)'
      })),
      state('closed', style({
        clipPath: 'inset(0 100% 0 0)'
      })),
      transition('open => closed', [
        animate('120ms')
      ]),
      transition('closed => open', [
        animate('100ms')
      ])
    ])
  ]
})
export class NavComponent implements OnInit {
  
  isOpen = false;

  constructor() { }

  ngOnInit() {
    console.log('bobo si serdon');
    console.log('joke lang masakit likod ni serdon');
    console.log('city boy si dean');
    console.log('tatarrsadas');
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
