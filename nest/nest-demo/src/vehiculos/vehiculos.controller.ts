import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
@Controller('vehiculos')
export class VehiculosController {
    constructor(private vehiculosService: VehiculosService) { }
    @Get(':arg1')
    public getVehiculos(@Param('arg1') arg1): string {
        return this.vehiculosService.getVehiculos(arg1)
    }
}