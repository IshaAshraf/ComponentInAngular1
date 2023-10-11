import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-lifecyclehook',
  templateUrl: './parent-lifecyclehook.component.html',
  styleUrls: ['./parent-lifecyclehook.component.css']
})
export class ParentLifecyclehookComponent {
  value!: string;
  submitValue(val: any) {
    this.value = val.value;
  }
  childhookexist = true;

  destroy(){
    this.childhookexist = false;
  }
}
