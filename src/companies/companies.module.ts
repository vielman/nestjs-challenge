import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Companies, CompaniesSchema } from 'src/shemas/companies.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Companies.name,
        schema: CompaniesSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [CompaniesService, CompaniesResolver],
})
export class CompaniesModule {}
