import { Controller, Get, Param } from '@nestjs/common';
import { Producto6Service } from './producto6.service';

@Controller('productos6')
export class Producto6Controller {
    constructor (private producto6Service: Producto6Service) {}
    @Get()
    public getProductos() : string {
        return this.producto6Service.getProductos();
    } 
    @Get(':arg1/:arg2/:arg3/:arg4')
    public getProducto(@Param('arg1') pos1, @Param('arg2') pos2, 
                       @Param('arg3') pos3, @Param('arg4') pos4) : string {
        return this.producto6Service.getProducto(pos1, pos2, pos3, pos4);
    } 
}
