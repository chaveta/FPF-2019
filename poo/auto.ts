export default class Auto {
    
    private marca: string;
    private modelo: number;
    
    public constructor(marca: string, modelo: number) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    public imprimirAuto(): void {
        console.log(this);
    }

}