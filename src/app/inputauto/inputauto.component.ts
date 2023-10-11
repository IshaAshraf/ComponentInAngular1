import { Component } from '@angular/core';

@Component({
  selector: 'app-inputauto',
  templateUrl: './inputauto.component.html',
  styleUrls: ['./inputauto.component.css'],
})
export class InputautoComponent {
  Value: string = '';
  arr = [
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


  // p_id

  constructor() {}

  ngOnInit(): void {}

  // onInputChangee() {
  //   let autocompleteValue: any = '';
  //   if (this.Value.length >= 2) {
  //     for (let i = 0; i < this.arr.length; i++) {
  //       const element = this.arr[i];
  //       if (
  //         (element.name as string)
  //           .toLowerCase()
  //           .startsWith(this.Value.toLowerCase())
  //       ) {
  //         autocompleteValue = element;
  //         console.log(element);
  //       }
  //     }
  //   }
  // }




//by using filter method
  // filteredOptions: any = [];

  // onnInputChangee() {
  //   const inputValue = this.Value.toLowerCase();
  //   this.filteredOptions = this.arr.filter((ar) =>
  //     ar.name.toLowerCase().startsWith(inputValue)
  //   );
  // }


  
  searchVal: any = '';
  search() {
    // debugger;
    const inputValue = this.Value.toLowerCase();
    this.searchVal = [];

    for (let i = 0; i < this.arr.length; i++) {
      const ar = this.arr[i];
      if (ar.name.search(inputValue) !== -1) {
        this.searchVal.push(ar);
        // console.log(this.searchVal)
      }
    }
  }
}
