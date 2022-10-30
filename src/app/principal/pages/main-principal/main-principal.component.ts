import { Component } from '@angular/core';

@Component({
  selector: 'app-main-principal',
  templateUrl: './main-principal.component.html',
  styleUrls: []
  
})

export class MainPrincipalComponent  {

  constructor() { }

  ingresar(proveedor: string){
    console.log(proveedor);

  }


}



