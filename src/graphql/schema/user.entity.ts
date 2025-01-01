import { Optional } from "@nestjs/common";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType() // For GraphQL
export class User {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    @Optional()
    age?: number
}