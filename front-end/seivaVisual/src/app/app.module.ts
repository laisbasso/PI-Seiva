import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedComponent } from './feed/feed.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { SobreComponent } from './sobre/sobre.component';
import { EquipeComponent } from './equipe/equipe.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInicioComponent,
    FooterComponent,
    EquipeComponent,
    SobreComponent,
    PostTemaComponent,
    FeedComponent,
    AdminComponent,
    DeleteTemaComponent,
    DeletePostagemComponent,
    PutTemaComponent,
    PutPostagemComponent,
    NavbarComponent
    CadastroComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
