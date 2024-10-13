import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Db } from '@datastax/astra-db-ts';
import { ProductQueryDto } from './dto/product-query.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ASTRA_DB_CLIENT') private readonly db: Db
  ) { }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(productQueryDto: ProductQueryDto) {
    const collection = this.db.collection('products');
    const result = (await collection.find({}, {
      vectorize: productQueryDto.search,
      limit: productQueryDto.take,
      skip: productQueryDto.skip,
    }).toArray());

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
