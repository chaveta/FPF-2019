import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";
import { Camioneta } from "./camioneta";
import { readFileSync, appendFileSync, writeFileSync } from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculosService {
    
    // Utilizo un arreglo para simular la base de datos
    private listaVehiculos: Vehiculo[];

    constructor() {
        
        // Inicializo el arreglo de vehiculos
        this.listaVehiculos = [];
        // Lo precargo con tres autos y tres camionetas
        let auto1 = new Auto('auto', 'Ford', 'Fiesta Kinetic Design Titanium 1.6 120cv', 'NEW364', 2013, 370000, 281);
        this.listaVehiculos.push(auto1);
        let auto2 = new Auto('auto', 'Fiat', 'Uno 1.4 GNC', 'KEW247', 2011, 275000, 280);
        this.listaVehiculos.push(auto2);
        let camioneta1 = new Camioneta('camioneta', 'Toyota', 'Hilux 2.5 DX Pack Cab Doble 4x2', 'HYT802', 2009, 950000, 705);
        this.listaVehiculos.push(camioneta1);
        let camioneta2 = new Camioneta('camioneta', 'Dodge', 'RAM 1500 Laramie', 'PIT122', 2015, 1800000, 988);
        this.listaVehiculos.push(camioneta2);
        let auto3 = new Auto('auto', 'Peugeot', '208 1.5 Allure Touchscreen', 'OUY843', 2015, 470000, 285);
        this.listaVehiculos.push(auto3);
        let camioneta3 = new Camioneta('camioneta', 'Fiat', 'Toro Volcano 4x4 MY20', 'NEZ500', 2013, 526000, 650);
        this.listaVehiculos.push(camioneta3);        
        let auto4 = new Auto('auto', 'Ford', 'Focus III 2.0 SE Plus MT', 'NSR247', 2014, 500000, 316);
        this.listaVehiculos.push(auto4);
        
    }

    // Método que devuelve una lista de vehículos según el parámetro indicado. El mismo puede ser:
    // 'todos', 'autos', 'camionetas', la marca, la patente o cualquiera de los  atributos representativos
    // del vehículo. No es case sensitive.
    public getVehiculos(arg1: string): any {
        let vehiculos = [];
        // Recorro la lista de vehículos y devuelvo aquellos que se ajusten al parámetro
        for (let unVehiculo of this.listaVehiculos) {
            if (arg1.toLowerCase() == 'todos') {
                vehiculos.push(unVehiculo);
            }
            else if ((arg1.toLowerCase() == 'camionetas') && (unVehiculo instanceof Camioneta)) {
                vehiculos.push(unVehiculo);
            }
            else if ((arg1.toLowerCase() == 'autos') && (unVehiculo instanceof Auto)) {
                vehiculos.push(unVehiculo);
            }
            else if (unVehiculo.getMarca().toLowerCase().includes(arg1.toLowerCase())) {
                vehiculos.push(unVehiculo);
            }
            else if (unVehiculo.getModelo().toLowerCase().includes(arg1.toLowerCase())){
                vehiculos.push(unVehiculo);
            }
            else if (arg1.toLowerCase() == unVehiculo.getPatente().toLowerCase()) {
                vehiculos.push(unVehiculo);
            }
            else if (parseInt(arg1) == unVehiculo.getAnio()) {
                vehiculos.push(unVehiculo);
            }
            else if ((unVehiculo.getPrecio()>0) && (parseInt(arg1)>=unVehiculo.getPrecio())){
                vehiculos.push(unVehiculo);
            }
        }
        return (vehiculos);
    }

    // Método que construye un vehículo según los datos indicados en el parámetro y lo guarda en la lista
    // de vehículos
    public createVehiculo(arg1: any) {
        let tipo = arg1['tipo'];
        let marca = arg1['marca'];
        let modelo = arg1['modelo'];
        let patente = arg1['patente'];
        let anio = arg1['anio'];
        let precio = arg1['precio'];
        // Valido la patente con un método de la clase
        if (this.validarPatente(patente)) {
            if (tipo == 'auto') {
                let capacidadBaul = arg1['capacidadBaul'];
                const unVehiculo = new Auto(tipo, marca, modelo, patente, anio, precio, capacidadBaul);
                this.listaVehiculos.push(unVehiculo);
            }
            else if (tipo == 'camioneta') {
                let capacidadCarga = arg1['capacidadCarga'];
                const unVehiculo = new Camioneta(tipo, marca, modelo, patente, anio, precio, capacidadCarga);
                this.listaVehiculos.push(unVehiculo);
            }
            return "ok";
        }
        else
            return "Error. La patente no es válida o ya existe para otro vehículo.";
    }

    // Método que elimina un vehículo según la patente indicada como parámetro
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

    // Método que busca un vehículo según la patente indicada y lo actualiza con los datos contenidos
    // en arg1
    public updateVehiculo(arg1: any, patente: string): boolean {
        // Busco la patente en la lista de vehículos y determino la posición en la que se encuentra
        let position = null;
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            let unVehiculo = this.listaVehiculos[i];
            if (unVehiculo.getPatente() == patente) {
                position = i;
            }
        }
        // Creo un objeto con los datos que recibo en arg1
        let unVehiculo: Vehiculo;
        let tipo = arg1['tipo'];
        let marca = arg1['marca'];
        let modelo = arg1['modelo'];
        let anio = arg1['anio'];
        let precio = arg1['precio'];
        if (tipo == 'auto') {
            let capacidadBaul = arg1['capacidadBaul'];
            unVehiculo = new Auto(tipo, marca, modelo, patente, anio, precio, capacidadBaul);     
        }
        else if (tipo == 'camioneta') {
            let capacidadCarga = arg1['capacidadCarga'];
            unVehiculo = new Camioneta(tipo, marca, modelo, patente, anio, precio, capacidadCarga);
        }
        // Actualizo el registro que corresponde a dicha posición
        this.listaVehiculos[position] = unVehiculo;
        return true;
    }

    // Método que valida la patente indicada como parámetro
    // Se busca que no sea nula y que no este repetida
    private validarPatente(patente: string): boolean {
        // Verifico si la patente tiene contenido
        if (!patente) {
            return false;
        }
        else {
            // Busco la patente en la lista de vehículos y determino si ya existe
            for (let unVehiculo of this.listaVehiculos) {
                if (unVehiculo.getPatente().toLowerCase() == patente.toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }
}