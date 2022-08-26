export class FindCharacterByNameUseCase {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async execute(characterName) {
        return await this.characterRepository.findCharacterByName(
            characterName,
        );
    }
}
