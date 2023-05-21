import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent {

  classBind: boolean = true;

  myStyle1 = "15px";
  myStyle2 = "155px";

  isActive:boolean = true;

  mltclasses = {
    class1 : true,
    class2 : true,
    class3 : true
  }

  mltstyle = {
    'background':'red',
    'border': '10px solid green'
  }
}
