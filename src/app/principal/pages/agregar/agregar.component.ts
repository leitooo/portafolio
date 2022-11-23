import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Reserva, Destino } from '../../interfaces/reserva';
import { ReservaService } from '../../services/reserva.service';
import { ConfirmarComponent } from '../components/confirmar/confirmar.component'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  destino = [
    {
      id: 'Viña Del Mar',
      desc: 'Viña Del Mar'
    },
    {
      id: 'La Serena',
      desc: 'La Serena',
    
    },
    {
      id: 'Pucon',
      desc: 'Pucón',
    
    },
    {
      id: 'Puerto Varas',
      desc: 'Puerto Varas',
    
    },
    {
      id: 'Valdivia',
      desc: 'Valdivia',
    
    },
  ];

  reserva: Reserva = {
    nombre: '',
    servicio: '',
    servio_extra: '',
    pago: '',
    destino: Destino.ViñaDelMar,
    //alt_img: '',
  }

  constructor( private reservaService: ReservaService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.reservaService.getReservaPorId( id ) )
      )
      .subscribe( reserva => this.reserva = reserva );

  }

  guardar() {
    
    if( this.reserva.nombre.trim().length === 0  ) {
      return;
    }

    if ( this.reserva.id ) {
      // Actualizar
      this.reservaService.actualizarReserva( this.reserva )
        .subscribe( reserva => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.reservaService.agregarReserva( this.reserva )
        .subscribe( reserva => {
          this.router.navigate(['/reserva/editar', reserva.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarHeroe() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.reserva
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.reservaService.borrarReserva( this.reserva.id! )
            .subscribe( resp => {
              this.router.navigate(['/reserva']);
            });
        }
        
      }
    )



  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }

}
