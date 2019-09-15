import { Injectable } from '@nestjs/common';
@Injectable()
export class VehiculosService {
    public getVehiculos(): any {
        let vehiculos = [];
        vehiculos[0] = {
            'marca': 'Toyota',
            'modelo': 'Hilux',
            'patente': 'AA000AA',
            'anio': '2019',
            'precio': '900000'
        };
        vehiculos[1] = {
            'marca': 'Fiat',
            'modelo': 'Uno',
            'patente': 'AA000AB',
            'anio': '2019',
            'precio': '450000'
        };
        vehiculos[2] = {
            'marca': 'Ford',
            'modelo': 'Focus',
            'patente': 'AA000AC',
            'anio': '2019',
            'precio': '1000000'
        };
        return vehiculos;        
    }
}