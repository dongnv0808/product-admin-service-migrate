import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductRepository } from './product.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductRepository,
    ])
  ],
  providers: [],
  exports: [
    TypeOrmModule
  ]
})
export class ProductModule {}
