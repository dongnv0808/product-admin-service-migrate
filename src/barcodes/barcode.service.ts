import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { Barcode } from './entity/barcodes.entity'
import { BarcodeRepository } from './barcode.repository'

@Injectable()
export class BarcodeService extends BaseService<Barcode, BarcodeRepository> {
  constructor(repository: BarcodeRepository) {
    super(repository)
  }

  findById(id: number): Promise<Barcode> {
    return this.repository.findOne({ id: id })
  }

}
