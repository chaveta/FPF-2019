import {Vehiculo} from "./vehiculo";
import {Auto} from "./auto";
import {Camioneta} from "./camioneta";

import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculosService {

    private baseVehiculos: Vehiculo[];

    constructor(){
        this.baseVehiculos = [];
        // Utilizo un arreglo para simular la base de datos a la que acceden los servicios
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
}