import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsOptional()
  address?: string;
  @IsOptional()
  web?: string;
  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
