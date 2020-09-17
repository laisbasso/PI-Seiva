import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-subir',
  templateUrl: './botao-subir.component.html',
  styleUrls: ['./botao-subir.component.css']
})
export class BotaoSubirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subir(){
    window.scroll(0,0);
  }

}
