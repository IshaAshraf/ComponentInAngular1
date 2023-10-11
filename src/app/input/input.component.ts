import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  Value: string = '';
  array = [
    {
      id: 1,
      name: 'doe',
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

  constructor() {}

  ngOnInit(): void {}

  onInputChange() {}

  search() {
    // let obj = this.array.find((o) => o.name == this.Value);
    // console.log(obj);
    // if(obj){
    //   console.log("exist");
    // }

    let found: boolean = false;
    let autocompleteValue = '';
    
    for (let i = 0; i < this.array.length; i++) {
    
      if (this.array[i].name === this.Value) {
        found = true;
        console.log(this.Value);
      }
       
      
    }

    if (found) {
      console.log('Exist');
    } else {
      console.log('Not Exist');
    }


      // if (this.Value.length >= 2) {
      //   for (let i = 0; i < this.array.length; i++) {
      //     console.log(this.array[i].name);
      //     const element = this.array[i].name;
      //     console.log(element);
      //     if (element.toLowerCase().startsWith(this.Value.toLowerCase())) {
      //       autocompleteValue = element;
      //       break;
      //     }
      //   }
      // }
  }
}
