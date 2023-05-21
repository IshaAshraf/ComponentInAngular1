import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app-services/message.service';
import { DesignutilityService } from '../app-services/designutility.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  product :any=[]
 
  constructor(private _msgService:DesignutilityService){

  }
  ngOnInit(){
    console.log('dATA..............',this._msgService.product)
    this.product=this._msgService.product
    console.log('product ',this.product)
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
