import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Companies } from 'src/shemas/companies.schema';
import {
  CompanyInput,
  FindCompanyInput,
  UpdateCompanyInput,
} from './inputes/company.input';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Companies.name) private companiesModel: Model<Companies>,
  ) {}

  async findAll(): Promise<Companies[]> {
    return await this.companiesModel.find().exec();
  }

  async create(createCompany: CompanyInput): Promise<Companies> {
    const newCompany = new this.companiesModel(createCompany);
    return await newCompany.save();
  }

  async findOne(id: FindCompanyInput): Promise<Companies> {
    return await this.companiesModel.findById(id._id);
  }

  async update(company: UpdateCompanyInput): Promise<Companies> {
    console.log(company);
    return await this.companiesModel.findByIdAndUpdate(company._id, company, {
      new: true,
    });
  }

  async delete(_id: string): Promise<any> {
    console.log(_id);
    return await this.companiesModel.deleteOne({ _id: _id });
  }
}
