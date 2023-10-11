import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-lifecyclehook',
  templateUrl: './child-lifecyclehook.component.html',
  styleUrls: ['./child-lifecyclehook.component.css']
})
export class ChildLifecyclehookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  constructor(){
    console.log('constructor called')
  }
  ngOnInit(): void {
    console.log('ngOnInit called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')
    // console.log(changes)
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  @Input() myValue= "uxtrendz";

}
