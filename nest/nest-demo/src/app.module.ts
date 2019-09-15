import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Ambos imports agregados en clase, según lo indicado por Mauricio.
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// Imports agregados según lo indicado en la filmina "Rutas y APIs" (página 15)
import { Producto3Controller } from './producto/producto3.controller';
import { Producto3Service } from './producto/producto3.service';
import { Producto4Controller } from './producto/producto4.controller';
import { Producto4Service } from './producto/producto4.service';
import { Producto5Controller } from './producto/producto5.controller';
import { Producto5Service } from './producto/producto5.service';
import { Producto6Controller } from './producto/producto6.controller';
import { Producto6Service } from './producto/producto6.service';
import { Calculo2Controller } from './calculo/calculo2.controller';
import { Calculo2Service } from './calculo/calculo2.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { VehiculosService } from './vehiculos/vehiculos.service';

@Module({
  // Todo el contenido de imports: agregado según lo indicado en la filmina
  // "HTTP File Server - Nest" (página 17)
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'), 
    }),
  ],
  // "ProductoXController y productoXService agregados según lo indicado en la filmina "Rutas y APIs" (página 15)"
  controllers: [AppController, Producto3Controller, Producto4Controller, Producto5Controller, Producto6Controller, Calculo2Controller, VehiculosController],
  providers: [AppService, Producto3Service, Producto4Service, Producto5Service, Producto6Service, Calculo2Service, VehiculosService],
})
export class AppModule {}