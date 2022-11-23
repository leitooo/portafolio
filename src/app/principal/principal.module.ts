import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MainPrincipalComponent } from './pages/main-principal/main-principal.component';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { MainComponent } from './pages/main/main.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ConfirmarComponent } from './pages/components/confirmar/confirmar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [MainPrincipalComponent, LugaresComponent, MainComponent, DepartamentosComponent, ServiciosComponent, ReservasComponent, HomeComponent, AgregarComponent, ConfirmarComponent, BuscarComponent, ListadoComponent, ErrorPageComponent, ImagenPipe,],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
