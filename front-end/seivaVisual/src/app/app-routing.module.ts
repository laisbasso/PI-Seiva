import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { EquipeComponent } from './equipe/equipe.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeedComponent } from './feed/feed.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-inicio', pathMatch: 'full' },
	{ path: 'home-inicio', component: HomeInicioComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'cadastro-tema', component: PostTemaComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
