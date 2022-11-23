import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../interfaces/reserva';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  reserva: Reserva[] = [];
  
  constructor( private reservaService: ReservaService ) { }

  ngOnInit(): void {

    this.reservaService.getReservas()
      .subscribe( reserva => this.reserva = reserva );

  }

}
