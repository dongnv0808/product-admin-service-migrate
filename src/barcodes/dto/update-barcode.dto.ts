import { IsOptional, Length } from 'class-validator'

export class UpdateBarcodeDto {
    @IsOptional()
    name: string;

    @IsOptional()
    vendor_code: string;

    @IsOptional()
    vendor_name: string;

    @IsOptional()
    vendor_nation: string;

    @IsOptional()
    product_name: string;

    @IsOptional()
    product_code: string;

    @IsOptional()
    product_url: string;

    @IsOptional()
    product_img_url: string;

    @IsOptional()
    product_desc: string;

    @IsOptional()
    product_retail_price: number;

    @IsOptional()
    product_retail_unit: string;

    @IsOptional()
    product_weight_unit: number;

    @IsOptional()
    product_weight_value: number;

    @IsOptional()
    product_size_unit: number;

    @IsOptional()
    product_size_length: number;

    @IsOptional()
    product_size_width: number;

    @IsOptional()
    product_size_height: number;

    @IsOptional()
    product_box_size_unit: string;

    @IsOptional()
    product_box_size_length: number;

    @IsOptional()
    product_box_size_width: number;

    @IsOptional()
    product_box_size_height: number;

    @IsOptional()
    bundle_size_unit: string;

    @IsOptional()
    bundle_size_value: number;

    @IsOptional()
    box_size_unit: string;

    @IsOptional()
    box_size_value: number;

    @IsOptional()
    product_age_recommend_start: number;

    @IsOptional()
    product_age_recommend_end: number;

    @IsOptional()
    product_color: string;

    @IsOptional()
    is_deleted: number;

    @IsOptional()
    updated_date: string;

    @IsOptional()
    updated_by: number;
}