import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { PersonTabComponent } from './tabs/tab/person-tab/person-tab.component';
import { CityTabComponent } from './tabs/tab/city-tab/city-tab.component';
import {TabService} from './tabs/tab/tab.service';
import { TabsComponent } from './tabs/tabs.component';
import { TabLinkComponent } from './tabs/tab/tab-link/tab-link.component';
import { TabContentComponent } from './tabs/tab/tab-content/tab-content.component';
import {RouterModule, Routes} from '@angular/router';
import {TabContentDirective} from './tabs/tab/tab-content.directive';
import {SignalRService} from './signalr.service';
import { ClockComponent } from './clock/clock.component';
import {HttpModule, JsonpModule} from '@angular/http';


const routes: Routes = [
  { path: 'tab/:id', component: TabContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonTabComponent,
    CityTabComponent,
    TabsComponent,
    TabLinkComponent,
    TabContentComponent,
    TabContentDirective,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgbTabsetModule
  ],
  providers: [TabService, SignalRService],
  entryComponents: [ PersonTabComponent, CityTabComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
