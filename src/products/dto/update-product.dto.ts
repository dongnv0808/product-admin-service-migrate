import { IsOptional, Length } from 'class-validator'

export class UpdateProductDto {
    @IsOptional()
    user_id: number

    @IsOptional()
    @Length(0, 255)
    code: string

    @IsOptional()
    value: number
}