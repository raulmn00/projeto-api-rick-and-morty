export class FindUserByEmailUseCase {
    constructor(userRespository) {
        this.userRespository = userRespository;
    }
    async execute(email) {
        const user = await this.userRespository.FindUserByEmail(email);
        if (!user) {
            throw new Error('User not found.');
        }
        return user;
    }
}
