import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AuthCasModModule } from 'auth-cas-mod';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { ExampleComponent } from './example/example.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthCasModModule } from 'projects/auth-cas-mod/src/public_api';

const routes: Routes = [
  { path: 'example', component: ExampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AuthCasModModule.forRoot(environment),
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
