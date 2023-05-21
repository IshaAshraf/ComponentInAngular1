import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DesignutilityService } from '../app-services/designutility.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterContentInit{
  // constructor(private _designServices:DesignutilityService){
  //   this._designServices.userName.subscribe(uname => {
  //     this.userName = uname
  //   })
  // }
  // userName:any;
  // updateUserName(uname:any){
  //   this.userName = uname.value;
  //   this._designServices.userName.next(uname.value)
  // }



  //below code is for ViewChild

  userName="Default Value";
constructor(private renderer:Renderer2){

}
  clickMe(){
    alert(this.userName)
    var text= this.renderer.createText('this text is created by renderer')
    this.renderer.appendChild(this.childparagraph.nativeElement, text)
  }

  //below code is for renderer

  @ContentChild('childCon') childparagraph!:ElementRef

  ngOnInit(): void {
    
  }
 
  ngAfterContentInit(): void {
    console.log(this.childparagraph)
    this.renderer.setStyle(this.childparagraph.nativeElement, 'color', 'red');
  }
}
