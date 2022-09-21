import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MainPrincipalComponent } from './pages/main-principal/main-principal.component';


@NgModule({
  declarations: [MainPrincipalComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
