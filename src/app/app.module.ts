import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ObservableComponent } from './observable/observable.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    ObservableComponent,
    TimeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
