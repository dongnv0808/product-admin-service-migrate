import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { AttributeRepository } from './attribute.repository'
import { Attribute } from './entity/attribute.entity'

@Injectable()
export class AttributeService extends BaseService<Attribute, AttributeRepository> {
  constructor(repository: AttributeRepository) {
    super(repository)
  }

  findById(id: number): Promise<Attribute> {
    return this.repository.findOne({ id: id })
  }

}
