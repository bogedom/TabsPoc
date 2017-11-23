import {Component, Input, OnInit} from '@angular/core';
import {TabInterface} from '../tab-interface';

@Component({
  selector: 'app-person-tab',
  templateUrl: './person-tab.component.html',
  styleUrls: ['./person-tab.component.css']
})
export class PersonTabComponent implements OnInit, TabInterface {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
