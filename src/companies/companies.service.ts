import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Companies } from 'src/shemas/companies.schema';
import { CreateCompanyDto } from 'src/dto/create-company.dto';
import { UpdateCompanyDto } from 'src/dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Companies.name) private companiesModel: Model<Companies>,
  ) {}

  finAll() {
    this.companiesModel.find();
  }

  async create(createCompany: CreateCompanyDto) {
    const newCompany = new this.companiesModel(createCompany);
    return await newCompany.save();
  }

  async finOne(id: string) {
    return await this.companiesModel.findById(id);
  }

  async delete(id: string) {
    return await this.companiesModel.findByIdAndDelete(id);
  }

  async update(id: string, company: UpdateCompanyDto) {
    return await this.companiesModel.findByIdAndUpdate(id, company);
  }
}
