export class DeleteCharacterUseCase {
    constructor(userRepository) {
        this.repository = userRepository;
    }
    async execute(characterId) {
        const deletedCharacter = await this.repository.deleteCharacter(
            characterId,
        );
        if (!deletedCharacter) {
            throw new Error('User not founded.');
        }
        return deletedCharacter;
    }
}
