import {Vehiculo} from "./vehiculo";

export class Camioneta extends Vehiculo {
    
    private capacidadCarga: number;
        
    public constructor(tipo: string, marca: string, modelo: string, patente: string, anio: number, precio: number, capacidadCarga: number) {
        super(tipo, marca, modelo, patente, anio, precio);
        this.capacidadCarga = capacidadCarga;
    }

    public getCapacidadBaul(): number {
        return this.capacidadCarga;
    } 

}