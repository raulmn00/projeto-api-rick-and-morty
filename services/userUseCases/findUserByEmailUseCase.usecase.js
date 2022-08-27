export class FindUserByEmailUseCase {
    constructor(userRespository) {
        this.userRepository = userRespository;
    }
    async execute(email) {
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('User not found.');
        }
        return user;
    }
}
