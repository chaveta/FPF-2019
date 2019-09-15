import { Controller, Get } from '@nestjs/common';
import { Producto5Service } from './producto5.service';
@Controller('productos5')
export class Producto5Controller {
    constructor(private producto5Service: Producto5Service) { }
    @Get()
    public getProducto(): string {
        return this.producto5Service.getProducto()
    }
}