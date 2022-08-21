import { UserEntity } from '../../entities/User.entity.js';

export class createUserUseCase {
    constructor(userRepository) {
        this.respository = userRepository;
    }
    async execute(user) {
        const newUser = new UserEntity(user);
        newUser.validate();
        return await this.respository.create(newUser.getUser());
    }
}
