import {Component, Input, OnInit} from '@angular/core';
import {AppTab} from '../tab.model';

@Component({
  selector: 'app-tab-link',
  templateUrl: './tab-link.component.html',
  styleUrls: ['./tab-link.component.css']
})
export class TabLinkComponent implements OnInit {
  @Input() appTab: AppTab;
  href: string;

  constructor() {
  }

  ngOnInit() {
    this.href = 'tab/' + this.appTab.id;
  }

}
