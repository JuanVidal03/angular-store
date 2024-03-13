import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  // number the columns that are showing in the view
  cols:number = 3;
  // change the view of the products
  onColumnsChange(colsNumber:number):void{
    this.cols = colsNumber;
  }
}
