export class FindCharacterByIdUseCase {
    constructor(characterRepository) {
        this.respository = characterRepository;
    }

    async execute(characterId) {
        if (!characterId) {
            throw new Error('User id invalid.');
        }
        const characterFinded = await this.respository.findById(characterId);
        return characterFinded;
    }
}
