import { Component, OnInit } from '@angular/core';
import { TemaService } from './../service/tema.service';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Tema } from '../model/Tema';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  key = 'data';
  reverse = true;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  titulo: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];

  idTema: number;
  nomeTema: string;
  descricao: string;

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alert: AlertsService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.findAllPostagens();
    this.findAllTemas();
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    if (
      this.postagem.titulo == null ||
      this.postagem.descricao == null ||
      this.postagem.tema == null
    ) {
      this.alert.showAlertInfo('Preencha todos os campos antes de publicar!');
    } else {
      this.postagemService
        .postPostagem(this.postagem)
        .subscribe((resp: Postagem) => {
          this.postagem = resp;
          this.postagem = new Postagem();
          this.alert.showAlertSuccess('Postagem realizada com sucesso!');
          this.findAllPostagens();
        });
    }
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findByTituloPostagem() {
    if (this.titulo === '') {
      this.findAllPostagens();
    } else {
      this.postagemService
        .getByTituloPostagem(this.titulo)
        .subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp;
        });
    }
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  findByNomeTema() {
    this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
      this.listaTemas = resp;

      console.log(resp);
    });
  }
}
