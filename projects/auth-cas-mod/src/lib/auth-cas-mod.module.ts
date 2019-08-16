import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthCasModComponent } from './auth-cas-mod.component';
import { XmlConvertService } from './xml-convert.service';
import { HttpService } from './http.service';
import { AuthStorageService } from './auth-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthCasModService } from './auth-cas-mod.service';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './component/load/load.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [AuthCasModComponent, LoadComponent],
  exports: [AuthCasModComponent],
  providers: [
    XmlConvertService,
    AuthStorageService,
    HttpService
  ]
})
export class AuthCasModModule { 

  public static forRoot(environment: any): ModuleWithProviders {
    return {
        ngModule: AuthCasModModule,
        providers: [
            AuthCasModService,
            {
                provide: 'env', // you can also use InjectionToken
                useValue: environment
            }
        ]
    };
  }
}
