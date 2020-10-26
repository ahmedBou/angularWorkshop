import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { warningAlert } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';



@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    warningAlert,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
