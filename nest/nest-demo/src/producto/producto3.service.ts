import { Injectable } from '@nestjs/common';
@Injectable()
export class Producto3Service {
    private static readonly CANTIDAD_PRODUCTOS = 10;
    public getProducto(): any {
        let productos = [];
        for (let i = 0; i < Producto3Service.CANTIDAD_PRODUCTOS; i++) {
            let producto = {
                'producto': 'producto_' + i,
                'precio': Math.floor(Math.random() * 100)
            };
            productos.push(producto);
        }
        return productos;
    }
}