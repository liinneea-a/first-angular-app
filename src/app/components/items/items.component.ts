import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[];

  constructor() {
    this.items = []
   }

  ngOnInit(): void {
    this.items = [
      {
        content: 'first item',
        completed: false
      },
      {
        content: 'Second item',
        completed: false
      }
    ]
  }

  toggleDone(id:number): void {
    this.items.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

}
