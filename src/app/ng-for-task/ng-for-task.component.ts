import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-task',
  templateUrl: './ng-for-task.component.html',
  styleUrls: ['./ng-for-task.component.css'],
})
export class NgForTaskComponent implements OnInit {
  obj = {
    name: ['ISHA', 'ASHRAF'],
    course: ['HTML', 'CSS', 'JS', 'Angular'],
  };

  newFinaliObj: any;
  ngOnInit(): void {
    this.Test(this.obj);
  }
  Test(obj: any) {
    // for in loop
    // for (let key in obj) {
    //   console.log('key..cccccc', obj['name']);
    //   console.log(obj);
    //   console.log(obj[key][0]);
    //   console.log(obj[key]);
    //   let newobj: any = {
    //     fullName: obj['name'][0] + ' ' + obj['name'][1],
    //     firstName: obj['name'][0],
    //     lastName: obj['name'][1],
    //     course1: obj['course'][0],
    //     course2: obj['course'][1],
    //     course3: obj['course'][2],
    //     course4: obj['course'][3],
    //   };
    //   console.log('new object', newobj);
    // }
    // for loop
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      console.log(keys);

      let newobj: any = {
        fullName: obj['name'][0] + ' ' + obj['name'][1],
        firstName: obj['name'][0],
        lastName: obj['name'][1],
        course1: obj['course'][0],
        course2: obj['course'][1],
        course3: obj['course'][2],
        course4: obj['course'][3],
      };
      console.log('forLoop', newobj);
    }



    let add = 0;
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];

    let arrB = [];
    let arrC = [];
    let arrD = [];
    let even = [];
    let odd = [];
    let multiply = [];
    // let sum = [];

    for (let i = 0; i < arr.length; i++) {
      //sum
      add += arr[i];

      //multiply
      let array = 5 * arr[i];
      multiply.push(array);

      if (arr[i] >= 1 && arr[i] <= 5) {
        arrB.push(arr[i]);
      } else if (arr[i] >= 6 && arr[i] <= 9) {
        arrC.push(arr[i]);
      } else if (arr[i] >= 20 && arr[i] <= 24) {
        arrD.push(arr[i]);
      }
      //even
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      }
      //odd
      if (arr[i] % 2 === 1) {
        odd.push(arr[i]);
      }
    }

    console.log('Array', arr);
    console.log('ArrayB', arrB);
    console.log('ArrayC', arrC);
    console.log('ArrayD', arrD);
    console.log('EvenNumber', even);
    console.log('OddNumber', odd);
    console.log('Multiply', multiply);
    console.log('Sum', add);
  }
}
