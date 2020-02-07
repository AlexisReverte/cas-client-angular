import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthCasModComponent } from './auth-cas-mod.component';
import { AuthCasModService } from './auth-cas-mod.service';
import { AuthStorageService } from './auth-storage.service';
import { LoadComponent } from './component/load/load.component';
import { HttpService } from './http.service';
import { XmlConvertService } from './xml-convert.service';
import { JwtService } from './services/jwt.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [AuthCasModComponent, LoadComponent],
  exports: [AuthCasModComponent, LoadComponent],
  providers: [
    XmlConvertService,
    AuthStorageService,
    HttpService,
    JwtService
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
