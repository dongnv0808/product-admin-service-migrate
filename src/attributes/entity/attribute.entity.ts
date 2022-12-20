import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm'
// import { Exclude, Expose } from 'class-transformer'

@Entity({ name: 'attributes' })
export class Attribute extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({nullable: true})
  code: string

  @Column({nullable: true})
  is_deleted: number

  @Column({nullable: true})
  created_date: string

  @Column({nullable: true})
  updated_date: number

  @Column({nullable: true})
  created_by: string

  @Column({nullable: true})
  updated_by: number

}