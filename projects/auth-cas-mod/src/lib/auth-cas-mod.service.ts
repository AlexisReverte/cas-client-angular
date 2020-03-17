import { Inject, Injectable } from '@angular/core';
import { AuthStorageService } from './auth-storage.service';
import { HttpService } from './http.service';
import { XmlConvertService } from './xml-convert.service';
import { Foto } from './models/foto';
import { Observable, of } from 'rxjs';
import { JwtService } from './services/jwt.service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthCasModService {

  foto: Foto;

  constructor(
    private xmlConvert: XmlConvertService,
    private authStorage: AuthStorageService,
    private http: HttpService,
    private jwtService: JwtService,
    @Inject('env') private environment) { }

  verificaLogin(): Promise<any> {
    //Verifica se está autenticado, caso esteja valida o login, caso não esteja solicita o login.
    if (!this.isAuthenticated()) {
      this.openLogin()
    }
    return this.validateLogin()
  }

  validateLogin(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
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
    if (sucesso) {
      let login = sucesso['cas:user'];
      this.authStorage.saveLoginUnico(login);
      this.registraUsuario(login);
    } else {
      this.authStorage.remove();
      this.openLogin()
    }
    resolve()
  }

  registraUsuario(loginUnico:string) {
    this.buscaDadosUsuarioAutenticado(loginUnico).subscribe(user => {
      let userThis = Object.assign({}, user);
      userThis.foto = null;
      this.jwtService.generateJwt(userThis).subscribe(jwt => {
        user.jwt = jwt.data;
        this.authStorage.saveUsuario(user);
      });

    });

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
    return this.environment.cas_url + '/login?service=' + this.environment.app_url
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

  /**
   * Get current user session
   */
  getUserSession(): string {
    return this.authStorage.getLoginUnico();
  }

  getUserSessionObj(): User {
    return this.authStorage.getUsuario();
  }

  buscaDadosUsuarioAutenticado(login: string): Observable<User> {
    return this.http.doGet(this.environment.commons_url.concat('/usuario/autenticado/').concat(login));
  }

}
