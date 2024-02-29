import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from 'src/dto/create-company.dto';
import { UpdateCompanyDto } from 'src/dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  // @Get()
  // finAll() {
  //   return this.companiesService.findAll();
  // }
  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   const company = await this.companiesService.findOne(id);
  //   if (!company) throw new NotFoundException('Company no found');
  //   return company;
  // }

  // @Post()
  // async create(@Body() body: CreateCompanyDto) {
  //   try {
  //     return await this.companiesService.create(body);
  //   } catch (error) {
  //     if (error.code === 11000) {
  //       throw new ConflictException('Company already exists');
  //     }
  //     throw error;
  //   }
  // }

  // @Delete(':id')
  // @HttpCode(204)
  // async delete(@Param('id') id: string) {
  //   const company = await this.companiesService.delete(id);
  //   if (!company) throw new NotFoundException('Company no found');
  //   return company;
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() body: UpdateCompanyDto) {
  //   const company = await this.companiesService.update(id, body);
  //   if (!company) throw new NotFoundException('Company no found');
  //   return company;
  // }
}
