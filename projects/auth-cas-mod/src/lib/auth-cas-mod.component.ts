import { Component, OnInit } from '@angular/core';
import { AuthCasModService } from './auth-cas-mod.service';
// import { Routes, Router } from '@angular/router';
import { AuthStorageService } from './auth-storage.service';

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

  constructor(private auth: AuthCasModService, private authStorage: AuthStorageService) { }

  ngOnInit() {
    // setTimeout(()=> {
      this.saveTicket();
      this.auth.verificaLogin().then();
    // }, 5000)
  }

  saveTicket() {
    let ticket = window.location.search.replace('?ticket=', '')
    if(ticket) {
      this.authStorage.saveTicket(ticket)
    }
  }

  getLogin() {
    return this.authStorage.getLoginUnico();
  }

  getTicket() {
    return this.authStorage.getTicket();
  }
}
