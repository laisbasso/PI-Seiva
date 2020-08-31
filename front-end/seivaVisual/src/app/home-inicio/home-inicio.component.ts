import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.css']
})
export class HomeInicioComponent implements OnInit {

  cadastro: boolean = false

  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
    this.cadastro = true
  }

  logar(){
    this.cadastro = false
  }
}
