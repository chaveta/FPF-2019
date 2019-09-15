import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
@Controller('vehiculos')
export class VehiculosController {
    constructor(private vehiculosService: VehiculosService) { }
    @Get()
    public getVehiculos(): string {
        return this.vehiculosService.getVehiculos()
    }
}