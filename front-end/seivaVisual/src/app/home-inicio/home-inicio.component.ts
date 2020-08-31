import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.css']
})
export class HomeInicioComponent implements OnInit {

  cadastrar: boolean = false

  constructor() { }

  ngOnInit() {
  }

  cadastro(){
    this.cadastrar = true
  }

}
