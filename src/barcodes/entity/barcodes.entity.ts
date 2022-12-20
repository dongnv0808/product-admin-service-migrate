import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm'
// import { Exclude, Expose } from 'class-transformer'

@Entity({ name: 'barcodes' })
export class Barcode extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  code: string;

  @Column({nullable: true})
  @IsNotEmpty()
  name: string;

  @Column({nullable: true})
  vendor_code: string;

  @Column({nullable: true})
  vendor_name: string;

  @Column({nullable: true})
  vendor_nation: string;

  @Column({nullable: true})
  product_name: string;

  @Column({nullable: true})
  product_code: string;

  @Column({nullable: true})
  product_url: string;

  @Column({nullable: true})
  product_img_url: string;

  @Column({nullable: true})
  product_desc: string;

  @Column({nullable: true})
  product_retail_price: number;

  @Column({nullable: true})
  product_retail_unit: string;

  @Column({nullable: true})
  product_weight_unit: number;

  @Column({nullable: true})
  product_weight_value: number;

  @Column({nullable: true})
  product_size_unit: number;

  @Column({nullable: true})
  product_size_length: number;

  @Column({nullable: true})
  product_size_width: number;

  @Column({nullable: true})
  product_size_height: number;

  @Column({nullable: true})
  product_box_size_unit: string;

  @Column({nullable: true})
  product_box_size_length: number;

  @Column({nullable: true})
  product_box_size_width: number;

  @Column({nullable: true})
  product_box_size_height: number;

  @Column({nullable: true})
  bundle_size_unit: string;

  @Column({nullable: true})
  bundle_size_value: number;

  @Column({nullable: true})
  box_size_unit: string;

  @Column({nullable: true})
  box_size_value: number;

  @Column({nullable: true})
  product_age_recommend_start: number;

  @Column({nullable: true})
  product_age_recommend_end: number;

  @Column({nullable: true})
  product_color: string;

  @Column({nullable: true})
  is_deleted: number;

  @Column({nullable: true})
  created_date: string;

  @Column({nullable: true})
  updated_date: string;

  @Column({nullable: true})
  created_by: number;

  @Column({nullable: true})
  updated_by: number;
}