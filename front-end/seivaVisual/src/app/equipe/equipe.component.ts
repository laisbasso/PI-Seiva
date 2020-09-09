import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Router } from '@angular/router';
import { AuthService } from "./../service/auth.service";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(){
   
  }

}
