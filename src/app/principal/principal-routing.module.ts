import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { MainPrincipalComponent } from './pages/main-principal/main-principal.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'main-principal', component: MainPrincipalComponent },
      { path: 'lugares', component: LugaresComponent },
      { path: 'departamentos', component:  DepartamentosComponent},
      { path: 'servicios', component: ServiciosComponent },
      { path: 'reservas', component: ReservasComponent },
      { path: '**', redirectTo: 'main-principal' },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
