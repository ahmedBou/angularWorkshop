import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { warningAlert } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AngularDebugComponent } from './angular-debug/angular-debug.component';



@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    warningAlert,
    SuccessAlertComponent,
    AngularDebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
