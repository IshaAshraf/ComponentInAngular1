import { Component } from '@angular/core';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent {

  birds: string[] = ['Eagle', 'Parrot', 'Dove'];
  
}
