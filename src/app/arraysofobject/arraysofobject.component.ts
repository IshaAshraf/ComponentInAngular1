import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraysofobject',
  templateUrl: './arraysofobject.component.html',
  styleUrls: ['./arraysofobject.component.css'],
})
export class ArraysofobjectComponent implements OnInit {
  arr: any = [];
  ngOnInit(): void {
    if (this.arr.length === 0) {
      let per1 = {
        name: 'Isha',
        id: '1',
      };
      this.arr.push(per1);
    } else {
      let per2 = {
        name: 'Ishaa',
        id: '2',
      };
      this.arr.push(per2);
    }
    console.log(this.arr);

    // let teams = [
    //   {
    //     name: 'Usman',
    //     id: '1',
    //     project: [
    //       {
    //         projname: 'JS',
    //         id: '4',
    //       },
    //       {
    //         projname: 'CSS',
    //         id: '5',
    //       },
    //     ],
    //   },

    //   {
    //     name: 'Ibtesam',
    //     id: '2',
    //     project: [
    //       {
    //         projname: 'HTML',
    //         id: '6',
    //       },
    //       {
    //         projname: 'Angular',
    //         id: '7',
    //       },
    //     ],
    //   },

    //   {
    //     name: 'Awais',
    //     id: '3',
    //     project: [
    //       {
    //         projname: 'Node',
    //         id: '8',
    //       },
    //       {
    //         projname: 'React',
    //         id: '9',
    //       },
    //     ],
    //   },
    // ];
  }

  
}
