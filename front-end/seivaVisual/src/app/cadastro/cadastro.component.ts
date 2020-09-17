import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AlertsService } from '../service/alerts.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user : User = new User();
  senha: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertsService
  ) { }

  ngOnInit(): void {
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(["/home-inicio"])
        this.alert.showAlertSuccess("Usuário cadastrado com sucesso!")
      })
    } else {
      this.alert.showAlertDanger("Suas senhas não conferem")
    }
  }

  subir(){
    window.scroll(0,0);
  }
}
