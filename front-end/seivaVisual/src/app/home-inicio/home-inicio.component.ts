import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../service/auth.service";
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrls: ['./home-inicio.component.css']
})
export class HomeInicioComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit() {
    window.scroll(0, 0);
  }

  
}
