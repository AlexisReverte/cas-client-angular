import { NgModule } from '@angular/core';
import { AuthCasModComponent } from './auth-cas-mod.component';
import { XmlConvertService } from './xml-convert.service';
import { HttpService } from './http.service';
import { AuthStorageService } from './auth-storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [AuthCasModComponent],
  exports: [AuthCasModComponent],
  providers: [
    XmlConvertService,
    AuthStorageService,
    HttpService
  ]
})
export class AuthCasModModule { }
