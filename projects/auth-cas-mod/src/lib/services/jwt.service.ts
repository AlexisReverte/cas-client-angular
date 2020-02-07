import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Resposta } from '../models/resposta';

@Injectable()
export class JwtService {

    constructor(private http: HttpClient,
        @Inject('env') private environment) { }

    /**
     * Gera Jwt de acordo com o objeto User
     * @param user 
     */
    generateJwt(user: User): Observable<Resposta<string>> {
        return this.http.post<Resposta<string>>(this.environment.commons_url + '/security/jwt/generate', user);
    }

    /**
     * Recupera Usuario com JWT
     * @param jwt 
     */
    getClaims(jwt: string): Observable<User> {
        return this.http.get<User>(this.environment.commons_url + '/security/jwt/' + jwt);
    }
}
