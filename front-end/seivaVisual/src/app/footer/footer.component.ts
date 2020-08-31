import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Router } from '@angular/router';
import { AuthService } from "./../service/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }
  
  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/home-inicio'])
    localStorage.clear()
  }

}
