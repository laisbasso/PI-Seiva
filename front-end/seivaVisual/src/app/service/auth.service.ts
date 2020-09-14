import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:9000/usuario/logar', userLogin)
  }
  cadastrar (user: User) {
    return this.http.post('http://localhost:9000/usuario/cadastrar', user)
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }

    return ok
  }

  admin(){
    let ok = false
    let email = localStorage.getItem('email')

    if(email == 'admin@admin.com'){
      ok = true
    }
    return ok
  }
  
  navbarLogado(){ 
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null){
      ok = true
    }
    return ok
  }

  navbarHome(){ 
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null){
      ok = true
    }
    return ok
  }

}

