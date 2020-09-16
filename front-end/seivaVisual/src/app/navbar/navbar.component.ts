import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

   entrar() {
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem("token", this.userLogin.token)
      localStorage.setItem("email", this.userLogin.usuario)
      this.router.navigate(["/feed"])
    })
  }

  sair(){
    this.router.navigate(['/home-inicio'])
    localStorage.clear()
  }

}