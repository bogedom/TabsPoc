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
    TabContentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgbTabsetModule
  ],
  providers: [TabService],
  entryComponents: [ PersonTabComponent, CityTabComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
