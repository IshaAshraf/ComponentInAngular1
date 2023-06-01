import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent {
  products = [
    { proimg: '', name: 'Laptop', id: 'pro01', price: 15000 },
    { proimg: '', name: 'Mobile', id: 'pro02', price: 8000 },
    { proimg: '', name: 'TV', id: 'pro03', price: 12000 },
    { proimg: '', name: 'Washing Machine', id: 'pro04', price: 20000 },
  ];
}
