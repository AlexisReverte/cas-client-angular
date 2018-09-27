import { Injectable } from '@angular/core';

import { environment } from '../environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * Método responsável por realizar uma requisição com url completa.
   * 
   * @param url 
   */
  doGetUrlXML(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' })
  }
  
  /**
   * Método responsável por realizar requisição get para API
   * 
   * @param path 
   */
  doGet(path: string): Observable<any> {
    return this.http.get(path)
  }

}
