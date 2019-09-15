export class Vehiculo {
    
    private marca: string;
    private modelo: string;
    private patente: string;
    private anio: number;
    private precio: number;
    
    public constructor(marca: string, modelo: string, patente: string, anio: number, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.anio = anio;
        this.precio = precio;
    }

}