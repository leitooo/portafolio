export interface Reserva {
    id?:                string;
    nombre:             string;
    destino:            Destino;
    servicio:           string;
    servio_extra:       string;
    pago:               string;
    //alt_img?:           string; // https://kasdfjaskdfajsdf.com/img.png
}

export enum Destino {
    ViñaDelMar  = " Viña Del Mar",
    LaSerena    =   "La Serena",
    Pucon       =   "Pucón",
    PuertoVaras =   "Puerto Varas",
    Valdivia    =   "Valdivia",


}
