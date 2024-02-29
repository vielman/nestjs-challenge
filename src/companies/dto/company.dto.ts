import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CompanyDto {
  @Field()
  readonly _id: string;

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

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updateAt: Date;
}

@ObjectType()
export class UpdateCompanyDto {
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

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updateAt: Date;
}
