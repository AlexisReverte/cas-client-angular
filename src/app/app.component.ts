import { Component, OnInit } from '@angular/core';
import { AuthCasModService } from 'projects/auth-cas-mod/src/lib/auth-cas-mod.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authCasModService:AuthCasModService) {
    this.authCasModService.registraUsuario(authCasModService.getUserSession());
  }
}
