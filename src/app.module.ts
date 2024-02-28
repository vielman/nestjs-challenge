import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/companiesdbs'),
    CompaniesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
