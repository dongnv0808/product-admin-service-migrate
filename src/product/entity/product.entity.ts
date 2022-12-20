import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm'
// import { Exclude, Expose } from 'class-transformer'

@Entity({ name: 'products_test' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({nullable: true})
  name: string

  @Column({nullable: true})
  code: string

  @Column({nullable: true})
  state: string

  @Column({nullable: true})
  status: string

  @Column({nullable: true})
  is_deleted: number

  @Column({nullable: true})
  created_date: string

  @Column({nullable: true})
  updated_date: string

  @Column({nullable: true})
  created_by: number

  @Column({nullable: true})
  updated_by: number

}