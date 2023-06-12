import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css'],
})
export class SyncComponent implements OnInit {


  books:any = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      id:1,
    },
    { 
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      id:2,
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      id:3,
    },
    {
      title: 'A Passage to Pakistan',
      author: 'E.M. Foster',
      year: 1925,
      id:4,
    },
    {
      title: 'A Revenue Stamp',
      author: 'Amrita Pritam',
      year: 1925,
      id:5,
    },
  ];

  objprop(value:any){
    console.log('id',value.target.value)
  }

  ngOnInit(): void {
    this.test();
    
  }

  test() {
    
    //asynchronous example#1
    console.log('Task 1');

    setTimeout(function () {
      console.log('Task 2');
    }, 2000);

    console.log('Task 3');

    //asynchronous example#2
    const func2 = () => {
      setTimeout(() => {
        console.log('func2 is starting');
        console.log('func3 is starting');
      }, 3000);

      // console.log('func2 is starting');
    };
    //synchronous example#2
    const func1 = () => {
      console.log('func1 is starting');
      func2();
      console.log('func1 is ending');
    };

    func1();

    //synchronous example#2
    console.log('A');
    console.log('B');
    console.log('C');

    // let books = [
    //   {
    //     title: 'The Great Gatsby',
    //     author: 'F. Scott Fitzgerald',
    //     year: 1925,
    //     id:1,
    //   },
    //   { 
    //     title: 'To Kill a Mockingbird',
    //     author: 'Harper Lee',
    //     year: 1960,
    //     id:2,
    //   },
    //   {
    //     title: '1984',
    //     author: 'George Orwell',
    //     year: 1949,
    //     id:3,
    //   },
    //   {
    //     title: 'A Passage to Pakistan',
    //     author: 'E.M. Foster',
    //     year: 1925,
    //     id:4,
    //   },
    //   {
    //     title: 'A Revenue Stamp',
    //     author: 'Amrita Pritam',
    //     year: 1925,
    //     id:5,
    //   },
    // ];

    // var newObj = books.filter(ar);

    // function ar(book: any) {
    //   return book.year === 1925;
    // }

    // console.log('filter', newObj);

    
  }
}
