import { Injectable } from '@nestjs/common';
@Injectable()
export class Producto4Service {
    private static readonly CANTIDAD_PRODUCTOS = 10;
    public getProducto(): any {
        let productos = [];
        for (let i = 0; i < Producto4Service.CANTIDAD_PRODUCTOS; i++) {
            let precio = Math.floor(Math.random() * 100);
            let producto = {
                'producto': 'producto_' + i,
                'descripcion': 'descripción_' + i,
                'precio': precio,
                'iva': precio * 0.21
            };
            productos.push(producto);
        }
        return productos;
    }
}