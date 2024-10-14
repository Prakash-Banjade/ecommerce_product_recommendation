import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AstraDbModule } from './astra-db/astra-db.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { TrpcModule } from 'trpc/trpc.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AstraDbModule,
    ProductsModule,
    TrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
