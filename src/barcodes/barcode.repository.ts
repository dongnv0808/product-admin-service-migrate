import { EntityRepository, Repository } from 'typeorm'
import { Barcode } from './entity/barcodes.entity'

@EntityRepository(Barcode)
export class BarcodeRepository extends Repository<Barcode> {
  getInactiveBarcode(): Promise<Barcode[]> {
    return this.createQueryBuilder()
      .getMany()
  }
}
