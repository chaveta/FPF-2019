import {Vehiculo} from "./vehiculo";

export class Auto extends Vehiculo {
    
    private capacidadBaul: number;
        
    public constructor(tipo: string, marca: string, modelo: string, patente: string, anio: number, precio: number, capacidadBaul: number) {
        super(tipo, marca, modelo, patente, anio, precio);
        this.capacidadBaul = capacidadBaul;
    }

    public getCapacidadBaul(): number {
        return this.capacidadBaul;
    } 

}