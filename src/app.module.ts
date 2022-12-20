import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { APP_FILTER } from '@nestjs/core'
import { AllExceptionFilter } from './filter/exception.filter'

import appConfig from './config/app.config'
import databaseConfig from './config/database.config'
import { LoggerModule } from './logger/logger.module'

import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductHttpModule } from './products/product-http.module'
import { Product } from './products/entity/product.entity'
import { Attribute } from './attributes/entity/attribute.entity'
import { AttributeHttpModule } from './attributes/attribute-http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
      ]
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: databaseConfig().database_host,
      port: databaseConfig().database_port,
      username: databaseConfig().database_username,
      password: databaseConfig().database_password,
      database: databaseConfig().database,
      entities: [
        Product,
        Attribute
      ], 
      synchronize: false,
      extra: {
        trustServerCertificate: true,
      }
    }),
    LoggerModule,
    ProductHttpModule,
    AttributeHttpModule
  ],
  controllers: [
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {
}
