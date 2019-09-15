import { Controller, Get, Param } from '@nestjs/common';
import { Calculo2Service } from './calculo2.service';

@Controller('calculos2')
export class Calculo2Controller {
    constructor (private calculo2Service: Calculo2Service) {}
    @Get(':arg1/:arg2/:arg3')
    public getCalculo(@Param('arg1') pos1, @Param('arg2') pos2, @Param('arg3') pos3) : string {
        return this.calculo2Service.getCalculo(pos1, pos2, pos3);
    } 
}
