import { Controller, Get } from '@nestjs/common';
import { Producto3Service } from './producto3.service';
@Controller('productos3')
export class Producto3Controller {
    constructor(private producto3Service: Producto3Service) { }
    @Get()
    public getProducto(): string {
        return this.producto3Service.getProducto()
    }
}