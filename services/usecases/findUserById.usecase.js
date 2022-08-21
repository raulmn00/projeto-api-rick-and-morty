export class findUserByIdUseCase {
    constructor(userRepository) {
        this.respository = userRepository;
    }

    async execute(userId) {
        if (!userId) {
            throw new Error('User id invalid.');
        }
        const userFinded = await this.userRepository.findById(userId);
        return userFinded;
    }
}
