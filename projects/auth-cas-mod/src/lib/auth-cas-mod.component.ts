import { Component, OnInit } from '@angular/core';
import { AuthCasModService } from './auth-cas-mod.service';

@Component({
  selector: 'cas-auth-cas-mod',
  template: `
    <p>
      auth-cas-mod works!
    </p>
  `,
  styles: []
})
export class AuthCasModComponent implements OnInit {

  constructor(private auth: AuthCasModService) { }

  ngOnInit() {
    console.log('teste');
    this.auth.verificaLogin().then(res => console.log(res))
  }

}
