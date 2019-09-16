import {Vehiculo} from "./vehiculo";
import {Auto} from "./auto";
import {Camioneta} from "./camioneta";

import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculosService {

    private baseVehiculos: Vehiculo[];

    constructor(){
        this.baseVehiculos = [];
        // Utilizo un arreglo para simular la base de datos
        let auto1 = new Auto('Ford', 'Fiesta', 'AA000AA', 2019, 800000, 20);
        this.baseVehiculos.push(auto1);
        let auto2 = new Auto('Fiat', 'Uno', 'AA000AB', 2019, 450000, 17);
        this.baseVehiculos.push(auto2);
        let camioneta1 = new Camioneta('Toyota', 'Hilux', 'AA000AC', 2019, 950000, 1000);
        this.baseVehiculos.push(camioneta1);
        let camioneta2 = new Camioneta('Dodge', 'RAM', 'AA000AD', 2019, 980000, 1500);
        this.baseVehiculos.push(camioneta2);
        let auto3 = new Auto('Peugeot', '208', 'AA000AE', 2019, 800000, 15);
        this.baseVehiculos.push(auto3);    
    }

    public getVehiculos(arg1: string): any {
        let vehiculos = [];
        for (let unVehiculo of this.baseVehiculos) {
            if (arg1 == 'todos'){
                vehiculos.push(unVehiculo);
            }
            else if ((arg1 == 'camionetas') && (unVehiculo instanceof Camioneta)){
                vehiculos.push(unVehiculo);
            }
            else if ((arg1 == 'autos') && (unVehiculo instanceof Auto)){
                vehiculos.push(unVehiculo);
            }
        }
        return(vehiculos);
    }

    public create(arg1: any) {
        let tipo = arg1['tipo'];
        let marca = arg1['marca'];
        let modelo = arg1['modelo'];
        let patente = arg1['patente'];
        let anio = arg1['anio'];
        let precio = arg1['precio'];
        if (marca && modelo) {
            if (tipo == 'auto') {
                let capacidadBaul = arg1['capacidadBaul'];
                const unVehiculo = new Auto(marca, modelo, patente, anio, precio, capacidadBaul);    
                this.baseVehiculos.push(unVehiculo);
            }
            else if (tipo == 'camioneta') {
                let capacidadCarga = arg1['capacidadCarga'];
                const unVehiculo = new Camioneta(marca, modelo, patente, anio, precio, capacidadCarga);
                this.baseVehiculos.push(unVehiculo);
            }
            return "ok";
        }
        else
            return "parametros incorrectos";
    }

}