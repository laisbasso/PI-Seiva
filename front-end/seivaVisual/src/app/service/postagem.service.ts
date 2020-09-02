import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})

export class PostagemService {



  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:9000/usuario/logar', userLogin)
  }

  cadastrar(user: User){
    return this.http.post('http://localhost:9000/usuario/cadastrar', user)
  }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllPostagens() {
    return this.http.get('http://localhost:9000/postagem', this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:9000/postagem', postagem, this.token)
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null){
      ok = true
    }

    return ok
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null){
      ok = true
    }

    return ok
  }
}