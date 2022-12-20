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
  import { CreateAttributeDto } from './dto/create-attribute.dto'
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { UpdateAttributeDto } from './dto/update-attribute.dto'
  import { DeleteResult } from 'typeorm/index'
import { AttributeService } from './attribute.service'
import { Attribute } from './entity/attribute.entity'
//   import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('attributes')
//   @UseGuards(JwtAuthGuard)
  export class AttributeController {
    constructor(private readonly attributeService: AttributeService) {
    }
  
    @Get()
    index(): Promise<Attribute[]> {
      return this.attributeService.index()
    }
  
    @Get('/:id')
    async show(@Param('id') id: number): Promise<Attribute> {
      const product = await this.attributeService.findById(id)
      if (!product) {
        throw new NotFoundException()
      }
  
      return product
    }
  
    @Post()
    async create(@Body() attributeData: CreateAttributeDto): Promise<Attribute> {
      const createdProduct = await this.attributeService.store(attributeData)
  
      return plainToClass(Attribute, createdProduct)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() attributeData: UpdateAttributeDto): Promise<Attribute> {
      return this.attributeService.update(id, attributeData)
    }
  }