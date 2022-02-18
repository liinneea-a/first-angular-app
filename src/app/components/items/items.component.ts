import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[];
  itemsLeft:Item[];
  inputItem:string = '';

  constructor() {
    this.items = [];
    this.itemsLeft = [];
   }

  ngOnInit(): void {
    this.items = [
   
    ]
    
  }

  toggleDone(id:number): void {
    this.items.map((itemValue, i) => {
      if (i == id) itemValue.completed = !itemValue.completed;
      return itemValue;
    })
    this.checkItemsLeft();
  }

  checkItemsLeft() {
    this.itemsLeft = this.items.filter(item => item.completed == false);
    console.log(this.itemsLeft.length, this.itemsLeft);
  }

  deleteItem(id:number) {
    this.items = this.items.filter((itemValue, i) => i !== id);
    this.checkItemsLeft();
  }

  addItem() {
    this.items.push( {
      content: this.inputItem,
      completed: false
    });

    this.checkItemsLeft();
    this.inputItem = '';
  }

}
