import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id:number = this.route.snapshot.params["id"];
    this.findByIdTema(id)

  }

  findByIdTema(id:number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    });
  }

  btnSim() {
    this.temaService.deleteTema(this.tema.id).subscribe(() => {
      this.router.navigate(['/feed'])
      this.alert.showAlertSuccess('Tema apagado com sucesso!')
    })
  }

  btnNao() {
    this.router.navigate(['/cadastro-tema'])
  }

}
