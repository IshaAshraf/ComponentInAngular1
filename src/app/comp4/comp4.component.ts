import { Component } from '@angular/core';
import { DesignutilityService } from '../app-services/designutility.service';
@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
  userName:any;
  constructor(private _designServices:DesignutilityService){
    this._designServices.userName.subscribe(uname => {
      this.userName = uname
    })
  }
  updateUserName(uname:any){
    this.userName = uname.value;
    this._designServices.userName.next(uname.value)
  }
}
