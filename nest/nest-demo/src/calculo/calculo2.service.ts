import { Injectable } from '@nestjs/common';

@Injectable()
export class Calculo2Service {
    public getCalculo(p1: string, p2: string, p3: string): any {
        let num1 = parseInt(p1);
        let operador = p2;
        let num2 = parseInt(p3);
        let resultado = 0;

        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case 'd':
                resultado = num1 / num2;
                break;
            case '^':
                resultado = Math.pow(num1, num2);
                break;
            default:
                resultado = 0;
                break;
        }
        let calculo = [];
        calculo[0] = {
            'num1': num1,
            'operador': operador,
            'num2': num2,
            'resultado': resultado
        }
        return calculo;
    }
}