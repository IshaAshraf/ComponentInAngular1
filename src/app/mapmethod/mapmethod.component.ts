import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapmethod',
  templateUrl: './mapmethod.component.html',
  styleUrls: ['./mapmethod.component.css'],
})
export class MapmethodComponent implements OnInit {
  arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  newFinaliObj: any;
  ngOnInit(): void {
    this.Test(this.arr);
  }
  Test(obj: any) {
    //Using for loop
    let arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
    let add = 0;

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

    //Using map method
    let array = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
    //Map multi
    let a = array.map(multi);
    console.log(a);

    function multi(x: any) {
      return x * 5;
    }

    // Map evenn
    let b = array.map(evenn);
    console.log(b);

    function evenn(x: any) {
      if (x % 2 === 0) {
        return x;
      }
    }

    // Map oddd
    let c = array.map(oddd);
    console.log(c);

    function oddd(x: any) {
      if (x % 2 === 1) {
        return x;
      }
    }

    //Using filter method

    let ar = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
    //filter even
    //simple function
    // let d = ar.filter(evenTest);
    // console.log(d);
    // function evenTest(x: any) {
    //   return x % 2 === 1;
    // }

    // filter odd
    // let e = ar.filter(oddTest);
    // console.log(e);
    // function oddTest(x: any) {
    //   return x % 2 === 0;
    // }

    //arrow function
    let newfilter = ar.filter((item) => {
      return item % 2 == 0;
    }); 
    console.log('Even', newfilter);

    let newfilter2 = ar.filter((item) => {
      return item % 2 == 1;
    });
    console.log('Odd', newfilter2);




    //Using reduce method

    let ar3 = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30
    ];

    let addReduce = ar.reduce((h1) => {
      return h1;
    });
    console.log('add', addReduce);

    // let multiplyReduce = ar.reduce((x) => {
    //   return x * 5;
    // });
    // console.log('add', multiplyReduce);

    const multipliedArray = ar.reduce((result, currentValue) => {
      // result.push(currentValue * 5);
      return result;
    }, []);
    
    console.log(multipliedArray);
  }

  Value: string = '';
  onInputChange() {
    console.log(this.Value);
  }
  array = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Doe',
    },
    {
      id: 3,
      name: 'Alex',
    },
    {
      id: 4,
      name: 'Kevin',
    },
  ];

  



  
  
}
