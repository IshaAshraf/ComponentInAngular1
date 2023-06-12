import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestedarr',
  templateUrl: './nestedarr.component.html',
  styleUrls: ['./nestedarr.component.css'],
})
export class NestedarrComponent implements OnInit {
  countries = [
    {
      country: 'United States',
      cities: [
        {
          city: 'New York City',
          areas: [
            'Manhattan: Land area - 87.5 km²',
            'Brooklyn: Land area - 183.4 km²',
            'Queens: Land area - 281.1 km²',
          ],
        },
        {
          city: 'Los Angeles',
          areas: [
            'Downtown LA: Land area - 65.87 km²',
            'Hollywood: Land area - 14.92 km²',
            'Santa Monica: Land area - 21.44 km²',
          ],
        },
        {
          city: 'Chicago',
          areas: [
            'The Loop: Land area - 10.36 km²',
            'Lakeview: Land area - 12.25 km²',
            'Wicker Park: Land area - 4.57 km²',
          ],
        },
      ],
    },
    {
      country: 'Canada',
      cities: [
        {
          city: 'Toronto',
          areas: [
            'Downtown Toronto: Land area - 97.14 km²',
            'North York: Land area - 177.57 km²',
            'Scarborough: Land area - 187.7 km²',
          ],
        },
        {
          city: 'Montreal',
          areas: [
            'Ville-Marie: Land area - 16.5 km²',
            'Plateau-Mont-Royal: Land area - 8.1 km²',
            'Côte-des-Neiges: Land area - 7.2 km²',
          ],
        },
        {
          city: 'Vancouver',
          areas: [
            'Downtown Vancouver: Land area - 15.63 km²',
            'Kitsilano: Land area - 5.33 km²',
            'Gastown: Land area - 0.39 km²',
          ],
        },
      ],
    },
    {
      country: 'Australia',
      cities: [
        {
          city: 'Sydney',
          areas: [
            'CBD: Land area - 7.7 km²',
            'Eastern Suburbs: Land area - 17.3 km²',
            'Inner West: Land area - 32.4 km²',
          ],
        },
        {
          city: 'Melbourne',
          areas: [
            'Melbourne City Centre: Land area - 37.7 km²',
            'St Kilda: Land area - 3.2 km²',
            'Fitzroy: Land area - 2.8 km²',
          ],
        },
        {
          city: 'Brisbane',
          areas: [
            'Brisbane CBD: Land area - 2.2 km²',
            'South Bank: Land area - 1.1 km²',
            'Fortitude Valley: Land area - 1.2 km²',
          ],
        },
      ],
    },
  ];

  cities: any = [];
  selectedCountry: any;
  selectedCity: any;
  areas: any=[];

  onCountrySelected(selectedCountryName: any) {
    console.log('countryyyyy', selectedCountryName);

    if (selectedCountryName === 'United States') {
      this.selectedCountry = this.countries.find(
        (country) => country.country === selectedCountryName
      );
      console.log('ssssssss', this.selectedCountry);
      this.cities = this.selectedCountry.cities;
    } else {
      this.selectedCountry = this.countries.find(
        (country) => country.country === selectedCountryName
      );
      console.log('ssssssss', this.selectedCountry);
      this.cities = this.selectedCountry.cities;
      console.log('city...........console',this.cities);
      
    }
  }

  onCitySelected(selectedCityName: any) {
    console.log('ccciiiittttyyyyyyyyy', selectedCityName);

    if (selectedCityName === 'New York City') {
      this.selectedCity = this.cities.find(
        (city: any) => city.city === selectedCityName
      );
      console.log('areaaaa', this.selectedCity);
      this.areas = this.selectedCity.areas;
    } else {
      this.selectedCity = this.cities.find(
        (city: any) => city.city === selectedCityName
      );
      console.log('areassssssss', this.areas);
      this.areas = this.selectedCity.areas;
    }
  }

  ngOnInit(): void {
    this.onCountrySelected('United States');
    this.onCitySelected('New York City');
  }
}
