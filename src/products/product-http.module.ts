import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'
import { ProductModule } from './product.module'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'

@Module({
  imports: [ProductModule, ConfigService, LoggerService],
  providers: [ProductService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductHttpModule {
}