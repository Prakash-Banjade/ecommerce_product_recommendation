import { Inject, Injectable } from '@nestjs/common';
import { Db } from '@datastax/astra-db-ts';
import { TDefaultQueryParam } from '../../../../packages/shared/schemas/default-query-param.schema'
import { TVectorProduct, TVectorProductsArray } from '../../../../packages/shared/schemas/product.schema';
import { TRPCError } from '@trpc/server';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ASTRA_DB_CLIENT') private readonly db: Db
  ) { }

  async findAll(query: TDefaultQueryParam): Promise<TVectorProductsArray> {
    const collection = this.db.collection('products');
    const result = (await collection.find({}, {
      // vectorize: query.search,
      limit: query.take,
      // skip: query.skip,
    }).toArray());

    return result as TVectorProductsArray;
  }

  async getProductById(id: string): Promise<TVectorProduct | null> {
    const collection = this.db.collection('products');
    console.log(id)
    const search = await collection.findOne({ _id: id }, {
      includeSimilarity: true,
      projection: {
        _id: true,
        $vectorize: true,
        title: true,
        description: true,
        category: true,
        rating: true,
        price: true,
        actual_price: true,
        discounted_price: true,
        discount: true,
        stock_quantity: true,
        sku: true,
        seller: true,
        brand: true,
        review_count: true,
        featured_image: true,
      }
    });

    console.log(search?.$vectorize)

    return search as TVectorProduct;
  }
}
