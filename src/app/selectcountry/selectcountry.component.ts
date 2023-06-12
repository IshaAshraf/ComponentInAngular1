import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectcountry',
  templateUrl: './selectcountry.component.html',
  styleUrls: ['./selectcountry.component.css'],
})
export class SelectcountryComponent implements OnInit {
  countries = [
    {
      name: 'United States',
      cities: ['New York', 'Los Angeles', 'Chicago'],
    },
    {
      name: 'United Kingdom',
      cities: ['London', 'Manchester', 'Edinburgh'],
    },
    {
      name: 'Canada',
      cities: ['Toronto', 'Vancouver', 'Montreal'],
    },
  ];
  
  cities:any=[]
  objprop(value: any) {
    console.log(value.target.value);
  }



  // countr = [
  //   {
  //     name: 'United States',
  //     cities: ['New York', 'Los Angeles', 'Chicago'],
  //   },
  //   {
  //     name: 'United Kingdom',
  //     cities: ['London', 'Manchester', 'Edinburgh'],
  //   },
  //   {
  //     name: 'Canada',
  //     cities: ['Toronto', 'Vancouver', 'Montreal'],
  //   },
  // ];

  selectedCountry: any=true;
  selectedCity: any;

  onCountrySelected(selectedCountryName: any)  {
    console.log('ffffffffff',selectedCountryName)
    if(selectedCountryName==='United States')
    {
      this.selectedCountry = this.countries.find(country => country.name === selectedCountryName);
    console.log('ssssssss',this.selectedCountry)
    this.cities=this.selectedCountry.cities;
    }
    // 
    
    else{
    this.selectedCountry = this.countries.find(country => country.name === selectedCountryName.target.value);
    console.log('ssssssss',this.selectedCountry)
    this.cities=this.selectedCountry.cities;
    }
 
  }


  ngOnInit(): void {
    this.onCountrySelected('United States')
  }

}
