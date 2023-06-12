import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selectboxxx',
  templateUrl: './selectboxxx.component.html',
  styleUrls: ['./selectboxxx.component.css']
})
export class SelectboxxxComponent implements OnInit {
@Input() data:any
@Input() show:any
@Output() selectNew=new EventEmitter<any>();
onSelectChange(e:any){
  console.log('eeeeeeeeeee',e.target.value)
this.selectNew.emit(e.target.value)
}


ngOnInit(): void {
  console.log('my datA ',this.data)
  console.log('show value',this.show)
}
}
