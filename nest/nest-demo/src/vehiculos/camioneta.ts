import {Vehiculo} from "./vehiculo";

export class Camioneta extends Vehiculo {
    
    private capacidadCarga: number;
        
    public constructor(marca: string, modelo: string, patente: string, anio: number, precio: number, capacidadCarga: number) {
        super(marca, modelo, patente, anio, precio);
        this.capacidadCarga = capacidadCarga;
    }

}