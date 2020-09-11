import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../service/auth.service";
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.css']
})
export class HomeInicioComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem("token", this.userLogin.token)
      localStorage.setItem("email", this.userLogin.usuario)
      this.router.navigate(["/feed"])
    })
  }
}
