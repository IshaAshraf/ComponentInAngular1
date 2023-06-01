import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrls: ['./arr.component.css'],
})
export class ArrComponent implements OnInit {
  teams: any = [];
  per: any;

  ngOnInit(): void {
    let per = {};
    if (this.teams.length === 0) {
      let per: any = {
        name: 'Isha',
        id: '1',
        projectss: [],
      };
      this.teams.push(per);
    }

    const obj1 = {
      name: 'Isha',
      id: '1',
    };
    const obj2 = {
      name: 'Isha',
      id: '1',
    };

    this.teams[0].projectss.push(obj1, obj2);
    
    
    let per2: any = {
      name: 'abc',
      id: '2',
      projectsss: [],
    };
    this.teams.push(per2);

    const obj3 = {
      name: 'abc',
      id: '2',
    };
    const obj4 = {
      name: 'abc',
      id: '2',
    };

    this.teams[1].projectsss.push(obj3, obj4);

    console.log(this.teams);
  }






}
