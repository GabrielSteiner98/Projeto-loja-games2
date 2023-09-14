import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})

export class JogosComponent {

  usuario!: string;
  senha!: string;

  constructor(private _loginService: LoginService, private _router: Router) { }

  fazerLogin() {
    this._loginService.login(this.usuario, this.senha);
    this._router.navigate(['/restrito/lista']);
    this._loginService.setMostraMenu(false);
  }
}



