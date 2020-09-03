import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { Postagem } from '../model/Postagem';
<<<<<<< HEAD
import { Tema } from '../model/Tema';
=======
>>>>>>> 315bc50d178a3cbe723b55d6376bf363033bc0c3

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

=======
>>>>>>> 315bc50d178a3cbe723b55d6376bf363033bc0c3
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

<<<<<<< HEAD
=======
  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:9000/postagem/${id}`, this.token)
  }

>>>>>>> 315bc50d178a3cbe723b55d6376bf363033bc0c3
  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:9000/postagem', postagem, this.token)
  }

<<<<<<< HEAD
=======
  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:9000/postagem', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`http://localhost:9000/postagem/${id}`, this.token)
  }

>>>>>>> 315bc50d178a3cbe723b55d6376bf363033bc0c3
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