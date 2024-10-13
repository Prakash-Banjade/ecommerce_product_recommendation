import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AstraDbModule } from './astra-db/astra-db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AstraDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
