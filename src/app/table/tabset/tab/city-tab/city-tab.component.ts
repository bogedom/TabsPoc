import {Component, Input, OnInit} from '@angular/core';
import {TabInterface} from '../tab-interface';

@Component({
  selector: 'app-city-tab',
  templateUrl: './city-tab.component.html',
  styleUrls: ['./city-tab.component.css']
})
export class CityTabComponent implements OnInit, TabInterface {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
