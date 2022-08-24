export class FindAllUsersUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return await this.userRepository.findAllUsers();
    }
}
