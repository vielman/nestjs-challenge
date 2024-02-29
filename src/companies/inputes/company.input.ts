import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
  @Field()
  readonly name: string;

  @Field()
  readonly phone: string;

  @Field({ nullable: true })
  readonly address?: string;

  @Field({ nullable: true })
  readonly web?: string;

  @Field({ nullable: true })
  readonly is_active?: boolean;
}

@InputType()
export class UpdateCompanyInput {
  @Field()
  readonly _id: string;

  @Field({ nullable: true })
  readonly name?: string;

  @Field({ nullable: true })
  readonly phone?: string;

  @Field({ nullable: true })
  readonly address?: string;

  @Field({ nullable: true })
  readonly web?: string;

  @Field({ nullable: true })
  readonly is_active?: boolean;
}

@InputType()
export class FindCompanyInput {
  @Field()
  readonly _id: string;
}
