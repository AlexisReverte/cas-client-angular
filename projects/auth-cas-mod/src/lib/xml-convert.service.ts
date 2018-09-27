import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js'

@Injectable()
export class XmlConvertService {

  constructor() { }

  /**
   * Método responsável por converter XML em JSON
   * 
   * @param data 
   */
  convertToJson(data: string): Object {
    let res
    xml2js.parseString(data, { explicitArray: false }, (error, result) => {
      if (error) {
        throw new Error(error)
      } else {
        res = result
      }
    })
    return res
  }

  /**
   * Método responsável por converter objeto em XML
   * 
   * @param rootObject 
   */
  convertToXml(rootObject:Object) {
    return new xml2js.Builder().buildObject(rootObject);
  }

}
