import { Component, OnInit, ɵdefaultKeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css'],
})
export class LoopsComponent implements OnInit {
  per = {
    name: ['Isha', 'Ashraf'],
    course: ['HTML', 'CSS', 'JS', 'Angular'],
  };
  ngOnInit(): void {
    this.loopFunction(this.per);
    // for loop
  }

  loopFunction(per: any) {
    let keys = Object.keys(per);
    let values = Object.values(per);
    console.log('keysssssssss', keys);
    let newObj = {};

    //for of loop
    let obj = {
      id: '1',
      name: 'isha',
      email: 'i@gmail.com',
    };

    for (let [key, value] of Object.entries(obj)) {
      console.log(key, ':' + value);
    }

    //for in loop

    let per1: any = {
      name: ['Isha', 'Ashraf'],
      course: ['HTML', 'CSS', 'JS', 'Angular'],
    };

    for (let key in per1) {
      console.log(key, per1[key]);
      let per3 = {
        lName: per1['name'][1],
        cours: per1['course'][3],
      };
      console.log(per3);
    }
  }
}
