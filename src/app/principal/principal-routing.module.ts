import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPrincipalComponent } from './pages/main-principal/main-principal.component';

const routes: Routes = [

  {
    path: '',
    component: MainPrincipalComponent,
    children: [
      { path: '**', redirectTo: 'main-principal' },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
