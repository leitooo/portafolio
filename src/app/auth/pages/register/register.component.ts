import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name:     ['Arielito', [ Validators.required ]],
    rut:      ['10.574.234', [ Validators.required, Validators.maxLength(12)]],
    celular:  [981724615, [ Validators.required, Validators.maxLength(9) ]],
    email:    ['test4@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }


  registro() {
    const { name, rut, celular, email, password } = this.miFormulario.value;

    this.authService.registro( name, rut, celular, email, password)
      .subscribe( ok => {

        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });

  }



}
