import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit{
constructor(){}
ngOnInit(){
  
}
  selectedProduct:any;

getProductVal(val: any){
  console.log(val.target.value)
}
}
