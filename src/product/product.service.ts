import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { Product } from './entity/product.entity'
import { ProductRepository } from './product.repository'

@Injectable()
export class ProductService extends BaseService<Product, ProductRepository> {
  constructor(repository: ProductRepository) {
    super(repository)
  }

  findById(id: number): Promise<Product> {
    return this.repository.findOne({ id: id })
  }

}
