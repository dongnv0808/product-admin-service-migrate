import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'
import { BarcodeController } from './barcode.controller'
import { BarcodeModule } from './barcode.module'
import { BarcodeService } from './barcode.service'

@Module({
  imports: [BarcodeModule, ConfigService, LoggerService],
  providers: [BarcodeService],
  exports: [BarcodeService],
  controllers: [BarcodeController],
})
export class ProductHttpModule {
}