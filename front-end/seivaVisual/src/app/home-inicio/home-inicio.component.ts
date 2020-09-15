import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../service/auth.service";
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.css']
})
export class HomeInicioComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertsService
  ){}

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem("token", this.userLogin.token)
      localStorage.setItem("email", this.userLogin.usuario)
      this.router.navigate(["/feed"])
    }, err => {
        if (err.status == '500'){
          this.alert.showAlertDanger('E-mail ou senha inválidos, tente novamente!')
        }
    })
  }
}
