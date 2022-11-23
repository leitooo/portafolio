import { Pipe, PipeTransform } from '@angular/core';
import { Reserva } from '../interfaces/reserva';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( reserva: Reserva ): string {

//    if( !reserva.id && !reserva.alt_img ) {
//      return 'assets/no-image.png';
//   } else if ( reserva.alt_img ) {
//     return reserva.alt_img;
//    } else {
      return `assets/heroes/${ reserva.id }.jpg`;
    }


  }


