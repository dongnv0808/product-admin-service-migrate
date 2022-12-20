import { EntityRepository, Repository } from 'typeorm'
import { Attribute } from './entity/attribute.entity'

@EntityRepository(Attribute)
export class AttributeRepository extends Repository<Attribute> {
  getInactiveAttribute(): Promise<Attribute[]> {
    return this.createQueryBuilder()
      .getMany()
  }
}
