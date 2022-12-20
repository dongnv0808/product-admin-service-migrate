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
  import { EntityId } from 'typeorm/repository/EntityId'
  import { plainToClass } from 'class-transformer'
  import { DeleteResult } from 'typeorm/index'
import { BarcodeService } from './barcode.service'
import { Barcode } from './entity/barcodes.entity'
import { CreateBarcodeDto } from './dto/create-barcode.dto'
import { UpdateBarcodeDto } from './dto/update-barcode.dto'
//   import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Controller('barcodes')
//   @UseGuards(JwtAuthGuard)
  export class BarcodeController {
    constructor(private readonly barcodeService: BarcodeService) {
    }
  
    @Get()
    index(): Promise<Barcode[]> {
      return this.barcodeService.index()
    }
  
    @Get('/:id')
    async show(@Param('id') id: number): Promise<Barcode> {
      const barcode = await this.barcodeService.findById(id)
      if (!barcode) {
        throw new NotFoundException()
      }
  
      return barcode
    }
  
    @Post()
    async create(@Body() barcodeData: CreateBarcodeDto): Promise<Barcode> {
      const createdBarcode = await this.barcodeService.store(barcodeData)
  
      return plainToClass(Barcode, createdBarcode)
    }
  
    @Put('/:id')
    update(@Param('id') id: EntityId, @Body() BarcodeData: UpdateBarcodeDto): Promise<Barcode> {
      return this.barcodeService.update(id, BarcodeData)
    }
  }