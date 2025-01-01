import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

describe('UsersResolver', () => {
    let resolver: UsersResolver;
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersResolver,
                {
                    provide: UsersService,
                    useValue: {
                        findAll: jest.fn(),
                    },
                },
            ],
        }).compile();

        resolver = module.get<UsersResolver>(UsersResolver);
        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const users = [{ id: 1, name: 'John Doe' }];
              jest.spyOn(service, 'findAll').mockResolvedValue(users);
            const result = await resolver.findAll()
            expect(result).toEqual(users);
        });
    });
});
