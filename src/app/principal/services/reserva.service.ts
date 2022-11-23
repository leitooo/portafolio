import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reserva } from '../interfaces/reserva';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${ this.baseUrl }/reserva`);
  }

  getReservaPorId( id: string ):Observable<Reserva> {
    return this.http.get<Reserva>(`${ this.baseUrl }/reserva/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${ this.baseUrl }/reserva?q=${ termino }&_limit=6`);
  }

  agregarReserva( reserva: Reserva ): Observable<Reserva> {
    return this.http.post<Reserva>(`${ this.baseUrl }/reserva`, reserva );
  }

  actualizarReserva( reserva: Reserva ): Observable<Reserva> {
    return this.http.put<Reserva>(`${ this.baseUrl }/reserva/${ reserva.id }`, reserva );
  }

  borrarReserva( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/reserva/${ id }`);
  }

}
