import { Inject, Injectable } from '@nestjs/common';
import { Db } from '@datastax/astra-db-ts';
import { TDefaultQueryParam } from '../../../../packages/shared/schemas/default-query-param.schema'
import { TVectorProduct, TVectorProductsArray } from '../../../../packages/shared/schemas/product.schema';

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
      projection: {
        _id: true,
        title: true,
        category: true,
        rating: true,
        price: true,
        actual_price: true,
        discounted_price: true,
        featured_image: true,
        discount: true,
      }
      // skip: query.skip,
    }).toArray());

    const data = result as TVectorProductsArray
    console.log(data);
    
    return data;
  }

  async getProductById(id: string): Promise<TVectorProduct | null> {
    const collection = this.db.collection('products');
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
        $vector: true,
      }
    });

    if (!search) return null;

    console.log(search)

    return search as TVectorProduct;
  }

  async getSimilarProducts(vectorize: string): Promise<TVectorProductsArray> {
    const collection = this.db.collection('products');
    const search = await collection.find({}, {
      limit: 9,
      includeSimilarity: true,
      sort: { $vectorize: vectorize },
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
        $vector: true,
      }
    }).toArray();

    return search as TVectorProductsArray;
  }
}
