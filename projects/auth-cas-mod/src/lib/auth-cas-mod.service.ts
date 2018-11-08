import { AuthStorageService } from './auth-storage.service';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { XmlConvertService } from './xml-convert.service';
// import { environment } from '../environment';
// import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthCasModService {

  constructor(private xmlConvert: XmlConvertService, private authStorage: AuthStorageService, private http: HttpService, @Inject('env') private environment) { }
  
  verificaLogin(): Promise<any> {
    //Verifica se está autenticado, caso esteja valida o login, caso não esteja solicita o login.
    if(!this.isAuthenticated()){
      this.openLogin()
    }
    return this.validateLogin()
  }
  
  validateLogin(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(()=> {
      this.http
          .doGetUrlXML(this.getUrlValidate())
          .subscribe(res => this.validation(resolve, reject, res), reject)
        }, 3000)
    });
    return promise;
  }

  openLogin() {
    window.open(this.getUrlLogin(), '_self')
  }

  validation(resolve, reject, res) {
    let dados = this.xmlConvert.convertToJson(res)
    let sucesso = dados['cas:serviceResponse']['cas:authenticationSuccess']
    if(sucesso) {
      this.authStorage.saveLoginUnico(sucesso['cas:user'])
    } else {
      console.log(dados['cas:serviceResponse']['cas:authenticationFailure'])
      this.authStorage.remove();
      this.openLogin()
    }
    resolve()
  }
  
  
  logout() {
    this.authStorage.remove();
    window.open(this.environment.cas_url + '/logout?service=' + this.environment.app_url, '_self')
  }
  
  getTicket(): string {
    return this.authStorage.getTicket() 
  }

  getUrlValidate(): string {
    return this.environment.cas_url + '/serviceValidate?ticket=' + this.getTicket() + '&service=' + this.environment.app_url
  }
  
  getUrlLogin(): string {
    return this.environment.cas_url + '/login?locale=pt_BR&service='+ this.environment.app_url
  }
  
  isAuthenticated(): boolean {
    return this.isNotEmpty(this.getTicket())
  }

  isEmpty(obj): boolean {
    return obj == undefined || obj == null || obj == '' || obj == ' '  
  }

  isNotEmpty(obj): boolean {
    return !this.isEmpty(obj)
  }

}
