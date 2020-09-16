import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar(user: User){
    return this.http.post('http://localhost:8080/usuario/cadastrar', user)
  }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagem', this.token)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagem/${id}`, this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagem', postagem, this.token)
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/postagem', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/postagem/${id}`, this.token)
  }

  getByTituloPostagem(descricao: string){
    return this.http.get(`http://localhost:8080/postagem/descricao/${descricao}`, this.token)
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