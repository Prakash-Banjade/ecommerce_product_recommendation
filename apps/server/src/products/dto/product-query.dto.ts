import { Transform } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class ProductQueryDto {
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => {
        if (isNaN(+value)) return undefined;
        return +value;

    })
    take?: number;

    @IsOptional()
    @IsOptional()
    @Transform(({ value }) => {
        if (isNaN(+value)) return undefined;
        return +value;

    })
    skip?: number;
}