import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';

export class UpdateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  web?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
