import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common'
  import { CreateProductDto } from './dto/create-user-weight.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateProductDto } from './dto/update-user-weight.dto'
  import { DeleteResult } from 'typeorm/index'
import { ProductService } from './product.service'
import { Product } from './entity/product.entity'
//   import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('products')
//   @UseGuards(JwtAuthGuard)
  export class ProductController {
    constructor(private readonly productService: ProductService) {
    }
  
    @Get()
    index(): Promise<Product[]> {
      return this.productService.index()
    }
  
    @Get('/:id')
    async show(@Param('id') id: number): Promise<Product> {
      const product = await this.productService.findById(id)
      if (!product) {
        throw new NotFoundException()
      }
  
      return product
    }
  
    @Post()
    async create(@Body() productData: CreateProductDto): Promise<Product> {
      const createdProduct = await this.productService.store(productData)
  
      return plainToClass(Product, createdProduct)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() productData: UpdateProductDto): Promise<Product> {
      return this.productService.update(id, productData)
    }
  }