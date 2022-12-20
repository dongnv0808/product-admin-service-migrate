import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'
import { AttributeController } from './attribute.controller'
import { AttributeModule } from './attribute.module'
import { AttributeService } from './attribute.service'

@Module({
  imports: [AttributeModule, ConfigService, LoggerService],
  providers: [AttributeService],
  exports: [AttributeService],
  controllers: [AttributeController],
})
export class AttributeHttpModule {
}