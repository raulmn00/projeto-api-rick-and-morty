export class findCharacterByNameUseCase {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async execute(characterName) {
        return await this.characterRepository.findByName(characterName);
    }
}
