import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";
import { Camioneta } from "./camioneta";

import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculosService {

    private listaVehiculos: Vehiculo[];

    constructor() {
        // Utilizo un arreglo para simular la base de datos
        this.listaVehiculos = [];
        // Lo precargo con tres autos y dos camionetas
        let auto1 = new Auto('Ford', 'Fiesta', 'AA000AA', 2019, 800000, 20);
        this.listaVehiculos.push(auto1);
        let auto2 = new Auto('Fiat', 'Uno', 'AA000AB', 2019, 450000, 17);
        this.listaVehiculos.push(auto2);
        let camioneta1 = new Camioneta('Toyota', 'Hilux', 'AA000AC', 2019, 950000, 1000);
        this.listaVehiculos.push(camioneta1);
        let camioneta2 = new Camioneta('Dodge', 'RAM', 'AA000AD', 2019, 980000, 1500);
        this.listaVehiculos.push(camioneta2);
        let auto3 = new Auto('Peugeot', '208', 'AA000AE', 2019, 800000, 15);
        this.listaVehiculos.push(auto3);
    }

    public getVehiculos(tipo: string): any {
        let vehiculos = [];
        // Recorro la lista de vehículos y devuelvo aquellos cuyo tipo coincida con el parámetro
        for (let unVehiculo of this.listaVehiculos) {
            if (tipo == 'todos') {
                vehiculos.push(unVehiculo);
            }
            else if ((tipo == 'camionetas') && (unVehiculo instanceof Camioneta)) {
                vehiculos.push(unVehiculo);
            }
            else if ((tipo == 'autos') && (unVehiculo instanceof Auto)) {
                vehiculos.push(unVehiculo);
            }
        }
        return (vehiculos);
    }

    public create(arg1: any) {
        let tipo = arg1['tipo'];
        let marca = arg1['marca'];
        let modelo = arg1['modelo'];
        let patente = arg1['patente'];
        let anio = arg1['anio'];
        let precio = arg1['precio'];
        if (patente) {
            if (tipo == 'auto') {
                let capacidadBaul = arg1['capacidadBaul'];
                const unVehiculo = new Auto(marca, modelo, patente, anio, precio, capacidadBaul);
                this.listaVehiculos.push(unVehiculo);
            }
            else if (tipo == 'camioneta') {
                let capacidadCarga = arg1['capacidadCarga'];
                const unVehiculo = new Camioneta(marca, modelo, patente, anio, precio, capacidadCarga);
                this.listaVehiculos.push(unVehiculo);
            }
            return "ok";
        }
        else
            return "Error. Es mandatorio el ingreso de número de patente.";
    }

    public deleteVehiculo(patente: string): boolean {
        let position = null;
        // Busco la patente en la lista de vehículos y determino la posición en la que se encuentra
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            let unVehiculo = this.listaVehiculos[i];
            if (unVehiculo.getPatente() == patente) {
                position = i;
            }
        }
        // Elimino el registro que corresponde a dicha posición
        let removed = this.listaVehiculos.splice(position, 1);
        return removed.length == 1;
    }

}