import { CharacterEntity } from '../../entities/Character.entity.js';
export class CreateCharacterUseCase {
    constructor(userRepository) {
        this.respository = userRepository;
    }
    async execute(character, user) {
        const newCharacter = new CharacterEntity(character, user.id);
        newCharacter.validate();
        return await this.respository.create(newCharacter.getCharacter());
    }
}
