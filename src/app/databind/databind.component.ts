import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {
  // constructor(){}
  // ngOnInit() {
    
  // }

  dynName:string = "Shekhar"

  myMethod(){
    return "My channel name is " + this.dynName
  }

  appStatus:boolean = false;
  appSta:boolean = true;
  status1 = "online";
  status2 = "ofline";

  enable:boolean = false;
}
