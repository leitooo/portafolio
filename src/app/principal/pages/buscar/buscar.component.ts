import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Reserva } from '../../interfaces/reserva';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  heroes: Reserva[] = [];
  reservaSeleccionada: Reserva | undefined;

  constructor( private reservaService: ReservaService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.reservaService.getSugerencias( this.termino.trim() )
      .subscribe( heroes => this.heroes = heroes );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.reservaSeleccionada = undefined;
      return;
    }

    const reserva: Reserva = event.option.value;
    this.termino = reserva.destino;

    this.reservaService.getReservaPorId( reserva.id! )
      .subscribe( reserva => this.reservaSeleccionada = reserva );
  }

}
