import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {

  // firstValue!: number;
  // secondValue!: number;
  // result!: number;

  // calculateSum() {
  //   this.result = this.firstValue + this.secondValue;
  //   console.log(this.result);
  // }
  //

  result: string = '';

  onClick(value: any) {
    this.result += value;
    console.log(this.result);
  }

  clear() {
    this.result = '';
  }

  calculate() {
    console.log('res.....',typeof this.result)
    try {
      this.result = eval(this.result);
    } 
    catch (e) {
      this.result = 'Error';
    }
  }

  ngOnInit(): void {}
}
