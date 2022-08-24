import { characterDb } from '../mongo/schemas/character.schema.js';

export class CharacterRepositoryMongoDB {
    async create(character) {
        return await characterDb.create(character);
    }
    async findById(characterId) {
        return await characterDb.findOne({ id: characterId });
    }

    async deleteCharacter(characterId) {
        return await characterDb.findOneAndDelete(characterId);
    }
    async findAll() {
        return await characterDb.find();
    }
    async findByName(characterName) {
        return await characterDb.findOne({ name: characterName });
    }
    async updateCharacter(character) {
        return await characterDb.findOneAndUpdate(
            { id: character.id },
            character,
            {
                new: true,
            },
        );
    }
}
