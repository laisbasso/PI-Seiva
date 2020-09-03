import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../service/auth.service";
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.css']
})
export class HomeInicioComponent implements OnInit {

  user: User = new User();
  userLogin: UserLogin = new UserLogin();
  senha: string;

  cadastro: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit() {
  }

  cadastrase(){
    this.cadastro = true
  }

  logar(){
    this.cadastro = false
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp:User) => {
        this.user = resp
        this.cadastro = false
        this.router.navigate(["/home-inicio"])
        alert("Usuário cadastrado com sucesso!")
      })
    } else {
      alert("Suas senhas não conferem")
    }
  }

  entrar (){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) =>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      localStorage.setItem('email', this.userLogin.usuario)
      this.router.navigate(['/equipe'])
    })
  }
}
