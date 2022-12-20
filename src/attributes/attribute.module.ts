import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AttributeRepository } from './attribute.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AttributeRepository,
    ])
  ],
  providers: [],
  exports: [
    TypeOrmModule
  ]
})
export class AttributeModule {}
