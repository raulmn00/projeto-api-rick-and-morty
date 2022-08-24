import { CharacterEntity } from '../../entities/Character.entity.js';
export class CreateCharacterUseCase {
    constructor(characterRepository, findUserByIdUser) {
        this.respository = characterRepository;
        this.findUserByIdUser = findUserByIdUser;
    }
    async execute(character, userId) {
        await this.findUserByIdUser.execute(userId);
        const newCharacter = new CharacterEntity(character, userId);
        newCharacter.validate();
        return await this.respository.create(newCharacter.getCharacter());
    }
}
