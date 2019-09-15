import { Injectable } from '@nestjs/common';

@Injectable()
export class Producto6Service {
    private static readonly CANTIDAD_PRODUCTOS = 10;
    public getProductos() : any {
        let productos = [];
        productos[0] = {
            'producto': 'producto_0',
            'precio': 1,
        };
        productos[1] = {
            'producto': 'producto_1',
            'precio': 100,
        };
        productos[2] = {
            'producto': 'producto_2',
            'precio': 200,
        };
        productos[3] = {
            'producto': 'producto_3',
            'precio': 300,
        };
        productos[4] = {
            'producto': 'producto_4',
            'precio': 400,
        };
        productos[5] = {
            'producto': 'producto_5',
            'precio': 500,
        };
        productos[6] = {
            'producto': 'producto_6',
            'precio': 600,
        };
        productos[7] = {
            'producto': 'producto_7',
            'precio': 700,
        };
        productos[8] = {
            'producto': 'producto_8',
            'precio': 800,
        };
        productos[9] = {
            'producto': 'producto_9',
            'precio': 900,
        };
        return productos;
    }
    
    public getProducto(p1 : number, p2 : number, p3 : number, p4 : number) : any {
        let productos = [];
        productos[0] = {
            'producto': 'producto_0',
            'precio': 1,
        };
        productos[1] = {
            'producto': 'producto_1',
            'precio': 100,
        };
        productos[2] = {
            'producto': 'producto_2',
            'precio': 200,
        };
        productos[3] = {
            'producto': 'producto_3',
            'precio': 300,
        };
        productos[4] = {
            'producto': 'producto_4',
            'precio': 400,
        };
        productos[5] = {
            'producto': 'producto_5',
            'precio': 500,
        };
        productos[6] = {
            'producto': 'producto_6',
            'precio': 600,
        };
        productos[7] = {
            'producto': 'producto_7',
            'precio': 700,
        };
        productos[8] = {
            'producto': 'producto_8',
            'precio': 800,
        };
        productos[9] = {
            'producto': 'producto_9',
            'precio': 900,
        };
        
        let retornoProductos = [];
        for (let i=0; i<Producto6Service.CANTIDAD_PRODUCTOS; i++) {
            if (i==p1 || i==p2 || i==p3 || i==p4) {
                let producto = productos[i];
                retornoProductos.push(producto);
            }
        }
        return retornoProductos;
    }
}