import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.css']
})
export class MyLoaderComponent implements OnInit {
 constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // Show the loader
    // this.spinner.show();

    // // Simulate some asynchronous operation (e.g., HTTP request)
    // setTimeout(() => {
    //   // Hide the loader after the operation is complete
    //   this.spinner.hide();
    // }, 3000); // Simulate a 3-second operation
  }

}
