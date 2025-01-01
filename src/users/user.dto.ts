import { Optional } from '@nestjs/common';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
    @Field()
    name: string;

    @Field({ nullable: true })
    @Optional()
    age?: number;
}
