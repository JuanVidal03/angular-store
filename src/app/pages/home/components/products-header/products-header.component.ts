import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',

})
export class ProductsHeaderComponent {
  // value of the sort
  sort:string = 'desc';
  // change the sort state
  onSortUpdate(newSort:string):void{
    this.sort = newSort;
  }

  // products showing
  showCountItems:number = 10;
  // change the number of products showing up
  onItemsUpdate(count:number):void{
    this.showCountItems = count;
  }

  // change the way that the products are showing
  @Output() columnsCountChanges = new EventEmitter<number>();
  
  onColumnsUpdated(columnsNumber:number):void{
    this.columnsCountChanges.emit(columnsNumber);
  }
}
