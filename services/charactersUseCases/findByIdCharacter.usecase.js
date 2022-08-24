export class FindCharacterByIdUseCase {
    constructor(characterRepository) {
        this.respository = characterRepository;
    }

    async execute(characterId) {
        const characterFinded = await this.respository.findById(characterId);
        if (!characterId) {
            throw new Error('User id not passed.');
        }
        return characterFinded;
    }
}
