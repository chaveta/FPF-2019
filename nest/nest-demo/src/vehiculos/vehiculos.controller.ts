import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';

@Controller('vehiculos')
export class VehiculosController {
    constructor(private vehiculosService: VehiculosService) { }

    @Get(':arg1')
    // Método que devuelve una lista de vehículos según el parámetro indicado. El mismo puede ser:
    // 'todos', 'autos', 'camionetas', la marca, la patente o cualquiera de los  atributos representativos
    // del vehículo. No es case sensitive.
    public getVehiculos(@Param('arg1') arg1): string {
        return this.vehiculosService.getVehiculos(arg1)
    }

    @Post()
    // Método que construye un vehículo según los datos indicados en el parámetro y lo guarda en la lista
    // de vehículos
    create(@Body() body1: any): string {
        return this.vehiculosService.createVehiculo(body1);
    }

    @Delete(':arg1')
    // Método que elimina un vehículo según la patente indicada como parámetro
    public deleteVehiculo(@Param('arg1') arg1): boolean {
        return this.vehiculosService.deleteVehiculo(arg1);
    }

    @Put(':arg1')
    // Método que busca un vehículo según la patente y los datos indicados
    public updateVehiculo(@Body() body1: any, @Param('arg1') arg1): boolean {
        return this.vehiculosService.updateVehiculo(body1, arg1);
    }

}