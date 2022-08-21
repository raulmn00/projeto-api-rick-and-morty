import { UserEntity } from '../../entities/User.entity.js';

export class CreateUserUseCase {
    constructor(userRepository) {
        this.respository = userRepository;
    }
    async execute(user) {
        const newUser = new UserEntity(user);
        newUser.validate();
        return await this.respository.create(newUser.getUser());
    }
}
