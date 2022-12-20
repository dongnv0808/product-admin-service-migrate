import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BarcodeRepository } from './barcode.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BarcodeRepository,
    ])
  ],
  providers: [],
  exports: [
    TypeOrmModule
  ]
})
export class BarcodeModule {}
