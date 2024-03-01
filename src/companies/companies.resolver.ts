import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import {
  CompanyInput,
  FindCompanyInput,
  UpdateCompanyInput,
} from './inputes/company.input';
import { CompanyDto, UpdateCompanyDto } from './dto/company.dto';
import { ConflictException, NotFoundException } from '@nestjs/common';

@Resolver()
export class CompaniesResolver {
  constructor(private companiesService: CompaniesService) {}
  @Query(() => [CompanyDto])
  Company() {
    return this.companiesService.findAll();
  }

  @Query(() => CompanyDto)
  async findCompany(@Args('input') input: FindCompanyInput) {
    const company = await this.companiesService.findOne(input);
    if (!company) throw new NotFoundException('Company no found');
    return company;
  }

  @Mutation(() => CompanyDto)
  async createCompany(@Args('input') input: CompanyInput) {
    try {
      return await this.companiesService.create(input);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Company already exists');
      }
      throw error;
    }
  }

  @Mutation(() => UpdateCompanyDto)
  async updeteCompany(@Args('input') input: UpdateCompanyInput) {
    const company = await this.companiesService.update(input);
    if (!company) throw new NotFoundException('Company no found');
    return company;
  }

  @Mutation(() => String)
  async deleteCompany(@Args('input') input: FindCompanyInput): Promise<any> {
    const company = await this.companiesService.delete(input._id);
    if (!company) throw new NotFoundException('Company no found');
    return 'Company Removed.';
  }
}
