import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [TrpcService, TrpcRouter]
})
export class TrpcModule { }
