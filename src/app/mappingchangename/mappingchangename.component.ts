import { Component } from '@angular/core';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-mappingchangename',
  templateUrl: './mappingchangename.component.html',
  styleUrls: ['./mappingchangename.component.css'],
})
export class MappingchangenameComponent {
  arr = [
    {
      id: 1,
      name: 'doe',
      department: [
        {
          id: 1,
          name: 'CS',
        },
        {
          id: 2,
          name: 'SE',
        },
      ],
    },
    {
      id: 2,
      name: 'john',
    },
    {
      id: 3,
      name: 'alex',
    },
    {
      id: 4,
      name: 'kevin',
    },
  ];

  newArr: any = [];

  mapping(arr: any) {
    for (let i = 0; i < arr.length; i++) {
      let newObj1 = {
        p_id: arr[i]['id'],
        p_name: arr[i]['name'],
        department: new Array(),
      };
      // arr[0]['department']

      if (arr[i]['department']) {
        // console.log("sss");
        
        for (let j = 0; j < arr[i]['department'].length; j++) {
          // console.log(j);

          let newDept = {
            p_id: arr[i].department[j]['id'],
            p_name: arr[i].department[j]['name'],
          };
          // console.log(newDept);

          newObj1.department.push(newDept);
        }
      }
      // console.log("here ....",newObj1);
      this.newArr.push(newObj1);
    }
    // debugger;
    console.log('here .....2', this.newArr);
  }

  constructor() {}

  ngOnInit(): void {
    this.mapping(this.arr);
  }
}
