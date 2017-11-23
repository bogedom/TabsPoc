import {Component, Input, OnInit} from '@angular/core';
import {AppTab} from './tab.model';
import {TabService} from './tab/tab.service';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements OnInit {
  appTabs: AppTab[];

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.appTabs = this.tabService.getTabs();
  }

}
