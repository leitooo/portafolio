import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule  } from './auth-routing.module';
import { LoginComponent }     from './pages/login/login.component';
import { RegisterComponent }  from './pages/register/register.component';
import { MainComponent }      from './pages/main/main.component';
import {MatDatepickerModule}  from '@angular/material/datepicker';
import {MatNativeDateModule}  from '@angular/material/core';
//import {MatMomentDateModule}  from '@angular/material-moment-adapter';
registerLocaleData('es');







@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    
  ]
})
export class AuthModule { }
