import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AppTab} from '../tab.model';
import {TabContentDirective} from './tab-content.directive';
import {TabInterface} from './tab-interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() appTab: AppTab;
  @ViewChild(TabContentDirective) appTabContent: TabContentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log(this.appTab);
    console.log(this.appTab.component);
    console.log(this.appTab.data);
    /*const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.appTab.component);

    const viewContainerRef = this.appTabContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<TabInterface>componentRef.instance).data = this.appTab.data;*/
  }

}
