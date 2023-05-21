// import * as $ from 'jquery';
declare var $: any;
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
// import { DesignutilityService } from '../app-services/designutility.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements AfterViewInit, OnInit {
  // constructor(private _designServices:DesignutilityService){
  //   this._designServices.userName.subscribe(uname => {
  //     this.userName = uname
  //   })
  // }
  // username:string=""

  // below code for viewchild
  //same component changes
  userName: string = 'anup';
  @ViewChild('box') box!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    //using viewChild
    // console.log(this.box)
    // this.box.nativeElement.style.backgroundColor="blue"
    // this.box.nativeElement.classList="boxBlue"
    //this.box.nativeElement.innerHTML="This is modified HTML"
    console.log(this.child);

    //using renderer
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white');
    this.renderer.addClass(this.box.nativeElement, 'myClass');
    this.renderer.setAttribute(
      this.box.nativeElement,
      'title',
      'this is test title'
    );
  }

  //Out of componenet changing parent to child component

  @ViewChild(Comp2Component) child!: Comp2Component;
  changeChildProperty() {
    this.child.userName = 'Uxtrendz';
  }

  callChildProperty() {
    this.child.clickMe();
  }

  //using HostListner

  @HostListener('click') myClick() {
    // alert('Clicked');
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'white');
  }

  @HostListener('mouseover') myMouseOver() {
    // alert('MouseOver');
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseout') myMouseOut() {
    // alert('MouseOut');
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'pink');
  }


  // for this we need to add jQuery and also import in this file
  ngOnInit(): void {
    $(window).scroll(function () {
      console.log('scrolling');
    });
  }
}
