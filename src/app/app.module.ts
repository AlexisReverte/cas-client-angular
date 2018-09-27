import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthCasModModule } from 'auth-cas-mod';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthCasModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
