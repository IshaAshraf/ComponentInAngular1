import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app-services/message.service';
import { DesignutilityService } from '../app-services/designutility.service';
@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit{
  product = {};
  ngOnInit(){
this.product=this._msgService.product;
  }
constructor(private _msgService:DesignutilityService){

}

btnClick(){
  this._msgService.messageAlert();
}
  // btnClick() {
  //   const msgService = new MessageService();
  //   msgService.messageAlert()
  // }

  // we use dependency injection instead of btn click function
}

