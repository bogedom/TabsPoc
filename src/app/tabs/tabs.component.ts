import {Component, OnInit} from '@angular/core';
import {AppTab} from './tab/tab.model';
import {TabService} from './tab/tab.service';
import {PersonTabComponent} from './tab/person-tab/person-tab.component';
import {CityTabComponent} from './tab/city-tab/city-tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabType: string;
  typeComponents: string[];
  appTabs: AppTab[];

  constructor(private tabService: TabService) {
  }

  ngOnInit() {
    this.appTabs = this.tabService.getTabs();
    this.typeComponents = ['Person', 'City'];
    this.tabType = this.typeComponents[0];
  }

  addTab() {
    let tab: AppTab;
    const id = this.tabService.getNextId();
    if (this.tabType === 'Person') {
      tab = new AppTab(id, 'Tab' + id, PersonTabComponent, {});
    } else {
      tab = new AppTab(id, 'Tab' + id, CityTabComponent, {});
    }
    this.tabService.addTab(tab);
  }

}
