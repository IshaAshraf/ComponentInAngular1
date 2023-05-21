import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }
  messageAlert(){
    alert("Thanks for subscribe ok")
  }
  product=[{name:"Mobile", id:"001"},
  {name:"laptop", id:"001"}]
  
  // userName = new Subject<any>()
  userName = new BehaviorSubject('john')
}



