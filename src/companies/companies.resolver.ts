import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CompaniesResolver {
  @Query(() => String)
  helloWordl(): string {
    return 'Hola Mundo';
  }
}
