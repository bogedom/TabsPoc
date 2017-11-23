import { Injectable } from '@angular/core';
import {AppTab} from '../tab.model';
import {PersonTabComponent} from './person-tab/person-tab.component';
import {CityTabComponent} from './city-tab/city-tab.component';

@Injectable()
export class TabService {

  getTabs() {
    return [
      new AppTab(PersonTabComponent, {firstname: 'Darth', secondname: 'Vader'}),

      new AppTab(PersonTabComponent, {firstname: 'Steve', bio: 'Jobs'}),

      new AppTab(CityTabComponent,   {city: 'Munchen', country: 'Germany'}),

      new AppTab(CityTabComponent,   {city: 'Madrid', country: 'Spain'}),
    ];
  }

}
