import {Vehiculo} from "./vehiculo";

export class Auto extends Vehiculo {
    
    private capacidadBaul: number;
        
    public constructor(marca: string, modelo: string, patente: string, anio: number, precio: number, capacidadBaul: number) {
        super(marca, modelo, patente, anio, precio);
        this.capacidadBaul = capacidadBaul;
    }

}