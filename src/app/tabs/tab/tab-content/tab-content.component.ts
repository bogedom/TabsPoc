import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AppTab} from '../tab.model';
import {TabService} from '../tab.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TabContentDirective} from '../tab-content.directive';
import {TabInterface} from '../tab-interface';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit, OnDestroy {
  appTab: AppTab;
  @ViewChild(TabContentDirective) tabContent: TabContentDirective;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private tabService: TabService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.appTab = this.tabService.getTab(+params['id']);
          console.log(this.appTab);
          const viewContainerRef = this.tabContent.viewContainerRef;
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.appTab.component);

          viewContainerRef.clear();

          const componentRef = viewContainerRef.createComponent(componentFactory);
          (<TabInterface>componentRef.instance).data = this.appTab.data;
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
