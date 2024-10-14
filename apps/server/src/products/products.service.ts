import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Db } from '@datastax/astra-db-ts';
import { TDefaultQueryParam } from '../../../../packages/schemas/default-query-param.schema'

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ASTRA_DB_CLIENT') private readonly db: Db
  ) { }

  async findAll(query: TDefaultQueryParam) {
    const collection = this.db.collection('products');
    const result = (await collection.find({}, {
      // vectorize: query.search,
      limit: query.take,
      // skip: query.skip,
    }).toArray());

    return result;
  }
}
