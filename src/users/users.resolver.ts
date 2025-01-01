import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../graphql/schema';
import { CreateUserDto } from './user.dto';

@Resolver(() => User)
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(() => [User])
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserInput);
    }
}
