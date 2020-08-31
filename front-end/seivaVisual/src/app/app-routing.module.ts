import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { EquipeComponent } from './equipe/equipe.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-inicio', pathMatch: 'full' },
	{ path: 'home-inicio', component: HomeInicioComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
