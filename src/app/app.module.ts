import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import {
  NgxDaterangepickerBootstrapModule,
  NgxDaterangepickerLocaleService,
} from 'ngx-daterangepicker-bootstrap';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ObservableComponent } from './components/observable/observable.component';
import { TimeComponent } from './components/time/time.component';
import { HeaderComponent } from './components/header/header.component';
import { UtilsComponent } from './components/utils/utils.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDaterangepickerBootstrapModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    ObservableComponent,
    TimeComponent,
    UtilsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [NgxDaterangepickerLocaleService],
})
export class AppModule {}
