import { Component, OnInit } from '@angular/core';
import { AuthCasModService } from './auth-cas-mod.service';
// import { Routes, Router } from '@angular/router';
import { AuthStorageService } from './auth-storage.service';

@Component({
  selector: 'cas-auth-cas-mod',
  templateUrl: './auth-cas-mod.html',
  styleUrls: ['./auth-cas-mod.css']
})
export class AuthCasModComponent implements OnInit {

  constructor(private auth: AuthCasModService, private authStorage: AuthStorageService) { }
  isLoad: boolean = false;

  ngOnInit() {
    // setTimeout(()=> {
    if (!this.getLogin()) {
      this.saveTicket();
      this.auth.verificaLogin().then();
    }
    if (this.auth.isAuthenticated() && !this.getLogin()) {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else if (!this.auth.isAuthenticated()) {
      this.isLoad = false;
    } else {
      this.isLoad = true;
    }
    // }, 3000)
  }

  saveTicket() {
    let ticket = window.location.search.replace('?ticket=', '')

    if (ticket) {
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
