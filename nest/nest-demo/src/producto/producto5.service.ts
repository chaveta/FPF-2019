import { Injectable } from '@nestjs/common';
@Injectable()
export class Producto5Service {
    public getProducto(): any {
        let productos = [];
        productos[0] = {
            'producto': 'producto_0',
            'descripcion': 'Pan',
            'precio': 100,
            'iva': 21
        };
        productos[1] = {
            'producto': 'producto_1',
            'descripcion': 'Cerveza',
            'precio': 200,
            'iva': 42
        };
        productos[2] = {
            'producto': 'producto_2',
            'descripcion': 'Tabla de Picada',
            'precio': 300,
            'iva': 63
        };
        productos[3] = {
            'producto': 'producto_3',
            'descripcion': 'Helado',
            'precio': 400,
            'iva': 63
        };
        return productos;
    }
}