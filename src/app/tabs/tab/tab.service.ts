import {Injectable} from '@angular/core';
import {AppTab} from './tab.model';
import {PersonTabComponent} from './person-tab/person-tab.component';
import {CityTabComponent} from './city-tab/city-tab.component';

@Injectable()
export class TabService {
  tabs: AppTab[] = [
      new AppTab(1, 'Tab1', PersonTabComponent, {firstname: 'Darth', lastname: 'Vader'}),
      new AppTab(2, 'Tab2', PersonTabComponent, {firstname: 'Steve', lastname: 'Jobs'}),
      new AppTab(3, 'Tab3', CityTabComponent,   {city: 'Munchen', country: 'Germany'})
      /*new AppTab(4, 'Tab4', CityTabComponent,   {city: 'Madrid', country: 'Spain'}),*/
    ];

  getTabs(): AppTab[] {
    return this.tabs;
  }

  getTab(id: number): AppTab {
    this.tabs = this.getTabs();
    let tab: AppTab;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === id) {
        tab = this.tabs[i];
        break;
      }
    }
    return tab;
  }

  getNextId(): number {
    const length = this.tabs.length;
    let id: number;
    if (length > 0) {
      id = this.tabs[length - 1].id + 1;
    } else {
      id = 1;
    }
    return id;
  }

  addTab(tab: AppTab) {
    tab.id = this.getNextId();
    this.tabs.push(tab);
  }

}
