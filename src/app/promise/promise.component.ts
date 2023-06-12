import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  promise = false;

  ngOnInit(): void {
    // this.prom();
    let myPromise = new Promise(function (myResolve, myReject) {
      let x = 0;
      // some code (try to change x to 5
      if (x == 0) {
        myResolve('I m successful');
      } else {
        myReject('I m failed');
      }
    });

    myPromise
      .then((vlaue) => {
        console.log('aaa', vlaue);
      })
      .catch((error) => {
        console.log(error);
      });


    //   //Synchronous Example
    // console.log('Task 1');

    // setTimeout(function () {
    //   console.log('Task 2');
    // }, 2000);

    // console.log('Task 3');
  }

  // prom() {
  //   function pro() {
  //     return new Promise(function (resolve, reject) {
  //       console.log('Fetching data, Please wait');
  //      let  testing=false;
  //       if (testing) {
  //         console.log('tttttttttt',testing)
  //         resolve('I m successful');
  //       } else {
  //         reject('I m failed');
  //       }
  //     });
  //   }

  //   let onfulfilment = (result:any) =>{
  //     console.log(result);
  //   }

  //   let onRejection = (error:any) =>{
  //     console.log(error);
  //   }
  //   pro().then(onfulfilment)
  //   pro().catch(onRejection)
  // }
}
