import {Servicio} from './servicio';



export class Casa{

    nombre : string;
    precio: number;
    alquiler: boolean;
    direccion : string;
    habitaciones : number;
    foto : string;
    servicios: Servicio[];
    constructor( nombre: string ){
        this.nombre= nombre;


    }

}