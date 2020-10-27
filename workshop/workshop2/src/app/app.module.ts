import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { userField } from './dataBindingWs/databiding.component';
import { DirectivesComponent } from './directives/directives.component';



@NgModule({
  declarations: [
    AppComponent,
    userField,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
