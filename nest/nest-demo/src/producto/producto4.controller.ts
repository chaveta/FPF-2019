import { Controller, Get } from '@nestjs/common';
import { Producto4Service } from './producto4.service';
@Controller('productos4')
export class Producto4Controller {
    constructor(private producto4Service: Producto4Service) { }
    @Get()
    public getProducto(): string {
        return this.producto4Service.getProducto()
    }
}