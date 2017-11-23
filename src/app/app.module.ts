import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule, NgbTabset, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { TabsetComponent } from './table/tabset/tabset.component';
import { TabComponent } from './table/tabset/tab/tab.component';
import {FormsModule} from '@angular/forms';
import { PersonTabComponent } from './table/tabset/tab/person-tab/person-tab.component';
import { CityTabComponent } from './table/tabset/tab/city-tab/city-tab.component';
import { TabContentDirective } from './table/tabset/tab/tab-content.directive';
import {TabService} from './table/tabset/tab/tab.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsetComponent,
    TabComponent,
    PersonTabComponent,
    CityTabComponent,
    TabContentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbTabsetModule
  ],
  providers: [TabService],
  entryComponents: [ PersonTabComponent, CityTabComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
