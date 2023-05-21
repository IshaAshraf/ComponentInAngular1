import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent {
  mesg: string = "";
  onAddCart() {
    this.mesg = "Product added in cart";
  }


  Add = "";
  Calculation() {
    this.Add = "5 + 5 = 10";

  }

  onInuputClick(event:any){
console.log(event.target.value)
  }

laptop(){
  this.mesg = "Laptop added in cart";
}
tv(){
  this.mesg = "TV added in cart";
}
wm(){
  this.mesg = "Washing Machine added in cart";
}
}