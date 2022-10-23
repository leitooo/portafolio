import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MainPrincipalComponent } from './pages/main-principal/main-principal.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { MainComponent } from './pages/main/main.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ReservasComponent } from './pages/reservas/reservas.component';


@NgModule({
  declarations: [MainPrincipalComponent, LugaresComponent, MainComponent, DepartamentosComponent, ServiciosComponent, ReservasComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
