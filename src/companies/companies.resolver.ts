import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import {
  CompanyInput,
  FindCompanyInput,
  UpdateCompanyInput,
} from './inputes/company.input';
import { CompanyDto, UpdateCompanyDto } from './dto/company.dto';
import { ConflictException } from '@nestjs/common';

@Resolver()
export class CompaniesResolver {
  constructor(private companiesService: CompaniesService) {}
  @Query(() => [CompanyDto])
  Company() {
    return this.companiesService.findAll();
  }

  @Query(() => CompanyDto)
  findCompany(@Args('input') input: FindCompanyInput) {
    return this.companiesService.findOne(input);
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
    return await this.companiesService.update(input);
  }

  @Mutation(() => String)
  async deleteCompany(@Args('input') input: FindCompanyInput): Promise<any> {
    await this.companiesService.delete(input._id);
    return 'Company Removed.';
  }
}
